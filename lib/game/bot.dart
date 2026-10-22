import 'dart:math' as math;

import 'fighter.dart';
import 'input.dart';
import 'math.dart';
import 'rng.dart';

/// The bot opponent.
///
/// The brain only emits the same [FighterIntent] the player emits. It does
/// not modify fighter state directly, so both duelists obey the same rules.
class BotBrain {
  BotBrain({int seed = 1, this.enabled = true}) : _rng = Rng(seed ^ 0x51ED270B);

  final Rng _rng;

  /// Disabling the brain is a debug mode for input and visual checks.
  final bool enabled;

  double reactionTime = 0.24;
  double aggression = 0.45;
  double blockChance = 0.35;
  double mistakeChance = 0.18;

  double _decisionTimer = 0;
  double _blockHoldTimer = 0;
  bool _wantsBlock = false;
  double _move = 0;

  void setRound(int round) {
    final t = clamp((round - 1) / 9.0, 0, 1);
    reactionTime = lerp(0.24, 0.12, t);
    aggression = lerp(0.45, 0.85, t);
    blockChance = lerp(0.35, 0.78, t);
    mistakeChance = lerp(0.18, 0.04, t);
    // Give the player a beat to read the FIGHT banner before the first
    // decision. The opening gets tighter in later rounds.
    _decisionTimer = lerp(0.75, 0.35, t);
    _blockHoldTimer = 0;
    _wantsBlock = false;
    _move = 0;
  }

  void reset() {
    _decisionTimer = 0;
    _blockHoldTimer = 0;
    _wantsBlock = false;
    _move = 0;
  }

  FighterIntent decide(double dt, Fighter bot, Fighter player, bool fighting) {
    final intent = FighterIntent();
    if (!enabled || !fighting || bot.isDead || player.isDead) {
      return intent;
    }

    if (bot.state == FighterState.windup ||
        bot.state == FighterState.attack ||
        bot.state == FighterState.recover ||
        bot.state == FighterState.hit ||
        bot.state == FighterState.stagger) {
      return intent;
    }

    _decisionTimer -= dt;
    _blockHoldTimer -= dt;
    if (_blockHoldTimer <= 0) {
      _wantsBlock = false;
    }

    intent.blockHeld = _wantsBlock;

    if (_decisionTimer > 0) {
      intent.forward = _move > 0;
      intent.backward = _move < 0;
      return intent;
    }

    _decisionTimer = reactionTime * (0.75 + _rng.nextDouble() * 0.5);

    final distance = (player.x - bot.x).abs();
    final inRange = distance <= attackRange - 0.05;
    final threatened =
        player.state == FighterState.windup ||
        player.state == FighterState.attack;
    final playerOpen = player.isOpen;
    final playerTurtles = player.state == FighterState.block;

    if (_rng.chance(mistakeChance)) {
      _wantsBlock = false;
      _move = 0;
      intent.blockHeld = false;
      return intent;
    }

    if (threatened &&
        distance <= attackRange + 0.45 &&
        _rng.chance(blockChance)) {
      _wantsBlock = true;
      _blockHoldTimer = 0.26 + _rng.nextDouble() * 0.24;
      _move = 0;
      intent.blockHeld = true;
      return intent;
    }

    if (inRange && (playerOpen || _rng.chance(aggression))) {
      if (!playerTurtles || _rng.chance(0.30)) {
        intent.attackPressed = true;
        _wantsBlock = false;
        _move = 0;
        return intent;
      }
    }

    if (!inRange) {
      _move = 1;
    } else if (distance < minSeparation + 0.18) {
      _move = -1;
    } else if (playerTurtles && _rng.chance(0.45)) {
      _move = -1;
    } else if (_rng.chance(0.22)) {
      _move = -1;
    } else if (_rng.chance(0.22)) {
      _move = 0;
    } else {
      _move = 1;
    }

    intent.forward = _move > 0;
    intent.backward = _move < 0;
    return intent;
  }
}

/// Small helper used by the balance simulation and tests.
double botDistance(Fighter a, Fighter b) => (a.x - b.x).abs();

/// Returns a 0..1 difficulty estimate for the given round.
double difficultyForRound(int round) =>
    clamp((round - 1) / math.max(1, 9).toDouble(), 0, 1);
