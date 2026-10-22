import 'dart:math' as math;

import 'bot.dart';
import 'combat.dart';
import 'fighter.dart';
import 'input.dart';
import 'math.dart';

/// High-level match phases.
enum MatchPhase { roundIntro, fighting, roundEnd, matchEnd }

enum MatchResult { none, playerWin, botWin, draw }

enum EndReason { ko, timeout, draw }

enum GameEventType {
  roundStart,
  fight,
  hit,
  blocked,
  parried,
  roundEnd,
  matchEnd,
}

/// A short-lived event consumed by the renderer for particles and logging.
class GameEvent {
  const GameEvent(
    this.type, {
    this.round = 0,
    this.x = 0,
    this.y = 0,
    this.text,
    this.playerAttacked,
  });

  final GameEventType type;
  final int round;
  final double x;
  final double y;
  final String? text;
  final bool? playerAttacked;
}

/// Owns the two fighters, the bot brain, and the round / match state machine.
class Match {
  Match({int seed = 1, this.maxRounds = 10, bool botEnabled = true})
    : brain = BotBrain(seed: seed ^ 0x5A17, enabled: botEnabled) {
    player = Fighter(isPlayer: true, facing: 1, x: -1.6);
    bot = Fighter(isPlayer: false, facing: -1, x: 1.6);
    startRound(1);
  }

  final int maxRounds;
  final BotBrain brain;
  late final Fighter player;
  late final Fighter bot;

  MatchPhase phase = MatchPhase.roundIntro;
  MatchResult result = MatchResult.none;
  EndReason endReason = EndReason.ko;
  int round = 1;
  int playerRoundWins = 0;
  int botRoundWins = 0;
  double phaseTime = 0;
  double roundTime = roundDuration;
  String banner = '';
  double bannerTime = 0;

  final List<GameEvent> _events = <GameEvent>[];
  bool _suddenDeath = false;

  bool get isFighting => phase == MatchPhase.fighting;
  bool get isMatchOver => phase == MatchPhase.matchEnd;
  bool get isSuddenDeath => _suddenDeath;

  List<GameEvent> drainEvents() {
    final out = List<GameEvent>.from(_events);
    _events.clear();
    return out;
  }

  void _event(GameEvent event) {
    _events.add(event);
  }

  void startRound(int number) {
    round = number;
    phase = MatchPhase.roundIntro;
    phaseTime = 0;
    roundTime = roundDuration;
    result = MatchResult.none;
    endReason = EndReason.ko;
    player.reset(x: -1.6);
    bot.reset(x: 1.6);
    brain.setRound(number);
    banner = number > maxRounds ? 'SUDDEN DEATH' : 'ROUND $number';
    bannerTime = 1.2;
    _event(GameEvent(GameEventType.roundStart, round: number, text: banner));
  }

  void update(double dt, FighterIntent playerIntent) {
    if (phase == MatchPhase.matchEnd) {
      return;
    }
    phaseTime += dt;
    bannerTime = math.max(0, bannerTime - dt);

    switch (phase) {
      case MatchPhase.roundIntro:
        if (phaseTime >= 1.2) {
          phase = MatchPhase.fighting;
          phaseTime = 0;
          banner = 'FIGHT';
          bannerTime = 0.6;
          _event(const GameEvent(GameEventType.fight, text: 'FIGHT'));
        }
      case MatchPhase.fighting:
        _updateFighting(dt, playerIntent);
      case MatchPhase.roundEnd:
        if (phaseTime >= 2.0) {
          _advanceRound();
        }
      case MatchPhase.matchEnd:
        break;
    }
  }

  void _updateFighting(double dt, FighterIntent playerIntent) {
    roundTime = math.max(0, roundTime - dt);

    final botIntent = brain.decide(dt, bot, player, true);
    player.applyIntent(playerIntent, dt);
    bot.applyIntent(botIntent, dt);
    botIntent.clearEdges();

    player.update(dt);
    bot.update(dt);

    // If recovery, cooldown, or stun expired during player.update(dt), allow
    // a buffered player attack to start immediately on this frame.
    if (playerIntent.attackPressed &&
        player.canAct &&
        player.attackCooldown <= 0 &&
        !player.isAttacking) {
      player.startAttack();
      playerIntent.consumeAttack();
    } else {
      playerIntent.stepBuffer(dt);
    }

    // Resolve both attacks before applying either, so a simultaneous
    // exchange can produce a double K.O.
    final playerResult = _pendingAttack(player, bot);
    final botResult = _pendingAttack(bot, player);
    if (playerResult != null) {
      _applyCombat(playerResult, player, bot);
    }
    if (botResult != null) {
      _applyCombat(botResult, bot, player);
    }

    _clampPositions();

    if (player.hp <= 0 || bot.hp <= 0) {
      _endRound(EndReason.ko);
    } else if (roundTime <= 0) {
      _endRound(EndReason.timeout);
    }
  }

  CombatResult? _pendingAttack(Fighter attacker, Fighter defender) {
    if (attacker.state != FighterState.attack || attacker.hasLandedHit) {
      return null;
    }
    final result = resolveAttack(attacker, defender);
    if (result.outcome == CombatOutcome.miss) {
      return null;
    }
    attacker.hasLandedHit = true;
    return result;
  }

  void _applyCombat(CombatResult result, Fighter attacker, Fighter defender) {
    switch (result.outcome) {
      case CombatOutcome.hit:
        attacker.bloodyTip = true;
        defender.takeHit();
        _event(
          GameEvent(
            GameEventType.hit,
            round: round,
            x: defender.x,
            y: 2.0,
            text: 'HIT',
            playerAttacked: attacker.isPlayer,
          ),
        );
      case CombatOutcome.blocked:
        defender.blockImpact();
        _event(
          GameEvent(
            GameEventType.blocked,
            round: round,
            x: defender.x,
            y: 2.0,
            text: 'BLOCK',
            playerAttacked: attacker.isPlayer,
          ),
        );
      case CombatOutcome.parried:
        defender.blockImpact();
        attacker.stagger(parryStun);
        _event(
          GameEvent(
            GameEventType.parried,
            round: round,
            x: defender.x,
            y: 2.0,
            text: 'PARRY',
            playerAttacked: attacker.isPlayer,
          ),
        );
      case CombatOutcome.miss:
        break;
    }
  }

  void _clampPositions() {
    player.x = clamp(player.x, playerMinX, playerMaxX);
    bot.x = clamp(bot.x, botMinX, botMaxX);
    final gap = bot.x - player.x;
    if (gap < minSeparation) {
      final center = (player.x + bot.x) / 2;
      player.x = clamp(center - minSeparation / 2, playerMinX, playerMaxX);
      bot.x = clamp(center + minSeparation / 2, botMinX, botMaxX);
    }
  }

  void _endRound(EndReason reason) {
    if (phase != MatchPhase.fighting) {
      return;
    }

    endReason = reason;
    var playerWon = false;
    var botWon = false;

    if (reason == EndReason.ko) {
      if (player.hp <= 0 && bot.hp <= 0) {
        // Double K.O. is a draw.
      } else if (player.hp <= 0) {
        botWon = true;
      } else {
        playerWon = true;
      }
    } else {
      if (player.hp > bot.hp) {
        playerWon = true;
      } else if (bot.hp > player.hp) {
        botWon = true;
      }
    }

    if (playerWon) {
      playerRoundWins++;
    }
    if (botWon) {
      botRoundWins++;
    }

    phase = MatchPhase.roundEnd;
    phaseTime = 0;
    banner = switch (reason) {
      EndReason.timeout =>
        playerWon
            ? 'TIME - YOU'
            : botWon
            ? 'TIME - BOT'
            : 'TIME - DRAW',
      EndReason.ko =>
        playerWon
            ? 'K.O.'
            : botWon
            ? 'K.O.'
            : 'DOUBLE K.O.',
      EndReason.draw => 'DRAW',
    };
    bannerTime = 1.8;
    _event(GameEvent(GameEventType.roundEnd, round: round, text: banner));
  }

  void _advanceRound() {
    if (playerRoundWins >= 6 || botRoundWins >= 6) {
      _endMatch();
      return;
    }

    if (round >= maxRounds) {
      if (playerRoundWins == botRoundWins) {
        if (_suddenDeath) {
          _endMatch();
          return;
        }
        _suddenDeath = true;
        startRound(round + 1);
        return;
      }
      _endMatch();
      return;
    }

    startRound(round + 1);
  }

  void _endMatch() {
    phase = MatchPhase.matchEnd;
    phaseTime = 0;
    result = playerRoundWins > botRoundWins
        ? MatchResult.playerWin
        : botRoundWins > playerRoundWins
        ? MatchResult.botWin
        : MatchResult.draw;
    banner = switch (result) {
      MatchResult.playerWin => 'YOU WIN',
      MatchResult.botWin => 'BOT WINS',
      MatchResult.draw => 'DRAW',
      MatchResult.none => '',
    };
    bannerTime = 999;
    _event(GameEvent(GameEventType.matchEnd, round: round, text: banner));
  }
}
