import '../core/logger.dart';
import 'fighter.dart';
import 'input.dart';
import 'match.dart';

/// A read-only view of the game for the renderer and HUD.
class GameSnapshot {
  const GameSnapshot({
    required this.phase,
    required this.result,
    required this.endReason,
    required this.round,
    required this.maxRounds,
    required this.playerHp,
    required this.botHp,
    required this.playerWins,
    required this.botWins,
    required this.roundTime,
    required this.banner,
    required this.bannerTime,
    required this.player,
    required this.bot,
    required this.started,
    required this.suddenDeath,
    required this.time,
  });

  final MatchPhase phase;
  final MatchResult result;
  final EndReason endReason;
  final int round;
  final int maxRounds;
  final int playerHp;
  final int botHp;
  final int playerWins;
  final int botWins;
  final double roundTime;
  final String banner;
  final double bannerTime;
  final Fighter player;
  final Fighter bot;
  final bool started;
  final bool suddenDeath;
  final double time;

  bool get isMatchOver => phase == MatchPhase.matchEnd;
}

/// Composition root for the game rules.
class Game {
  Game({int seed = 1, Logger? logger, bool botEnabled = true})
    : _seed = seed,
      _botEnabled = botEnabled,
      logger = logger ?? const Logger() {
    match = Match(seed: seed, botEnabled: botEnabled);
  }

  final Logger logger;
  late Match match;
  final FighterIntent _playerIntent = FighterIntent();
  final List<GameEvent> _pendingEvents = <GameEvent>[];

  int _seed;
  final bool _botEnabled;
  bool started = false;
  double time = 0;
  MatchPhase? _lastPhase;

  void start() {
    if (started) {
      return;
    }
    started = true;
    time = 0;
    match = Match(seed: _seed, botEnabled: _botEnabled);
    _lastPhase = match.phase;
    logger.info('match start seed=$_seed');
  }

  void rematch() {
    started = true;
    time = 0;
    _seed++;
    match = Match(seed: _seed, botEnabled: _botEnabled);
    _lastPhase = match.phase;
    logger.info('rematch seed=$_seed');
  }

  void pressAttack() {
    if (started) {
      _playerIntent.queueAttack();
    }
  }

  void setForward(bool value) {
    _playerIntent.forward = value;
  }

  void setBackward(bool value) {
    _playerIntent.backward = value;
  }

  void setBlock(bool value) {
    _playerIntent.blockHeld = value;
  }

  void update(double dt) {
    if (!started) {
      time += dt;
      return;
    }

    time += dt;
    match.update(dt, _playerIntent);

    if (_lastPhase != match.phase) {
      _lastPhase = match.phase;
      logger.debug('phase ${match.phase.name} round ${match.round}');
    }

    final events = match.drainEvents();
    if (events.isEmpty) {
      return;
    }
    for (final event in events) {
      logger.debug(
        'event ${event.type.name} round=${event.round} ${event.text ?? ''}',
      );
    }
    _pendingEvents.addAll(events);
  }

  /// Drains events for the renderer's particles.
  List<GameEvent> takeEvents() {
    if (_pendingEvents.isEmpty) {
      return const <GameEvent>[];
    }
    final out = List<GameEvent>.from(_pendingEvents);
    _pendingEvents.clear();
    return out;
  }

  GameSnapshot snapshot() => GameSnapshot(
    phase: match.phase,
    result: match.result,
    endReason: match.endReason,
    round: match.round,
    maxRounds: match.maxRounds,
    playerHp: match.player.hp,
    botHp: match.bot.hp,
    playerWins: match.playerRoundWins,
    botWins: match.botRoundWins,
    roundTime: match.roundTime,
    banner: match.banner,
    bannerTime: match.bannerTime,
    player: match.player,
    bot: match.bot,
    started: started,
    suddenDeath: match.isSuddenDeath,
    time: time,
  );
}
