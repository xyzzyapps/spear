// ignore_for_file: avoid_print

import 'package:spear/game/bot.dart';
import 'package:spear/game/match.dart';

/// Runs a scripted-player vs bot balance simulation.
///
/// The player brain is a stand-in for a competent human: fixed reaction,
/// aggression, and block rate. The bot brain scales with the round.
Future<void> main(List<String> args) async {
  final matches = int.tryParse(args.isNotEmpty ? args[0] : '') ?? 40;
  var playerWins = 0;
  var botWins = 0;
  var draws = 0;
  var unfinished = 0;
  var totalRounds = 0;
  var totalSeconds = 0.0;
  var totalHits = 0;

  for (var i = 0; i < matches; i++) {
    final seed = 1000 + i;
    final match = Match(seed: seed);
    final playerBrain = BotBrain(seed: seed ^ 0x1234)
      ..setRound(6)
      ..reactionTime = 0.20
      ..aggression = 0.62
      ..blockChance = 0.58
      ..mistakeChance = 0.08;

    const dt = 1 / 60;
    var seconds = 0.0;
    while (match.phase != MatchPhase.matchEnd && seconds < 360) {
      final intent = playerBrain.decide(
        dt,
        match.player,
        match.bot,
        match.phase == MatchPhase.fighting,
      );
      match.update(dt, intent);
      for (final event in match.drainEvents()) {
        if (event.type == GameEventType.hit) totalHits++;
      }
      seconds += dt;
    }

    if (match.phase != MatchPhase.matchEnd) {
      unfinished++;
      continue;
    }

    switch (match.result) {
      case MatchResult.playerWin:
        playerWins++;
      case MatchResult.botWin:
        botWins++;
      case MatchResult.draw:
        draws++;
      case MatchResult.none:
        unfinished++;
    }
    totalRounds += match.round;
    totalSeconds += seconds;
  }

  final decided = playerWins + botWins + draws;
  print('Homer balance simulation');
  print('matches=$matches decided=$decided unfinished=$unfinished');
  print('player=$playerWins bot=$botWins draw=$draws');
  if (decided > 0) {
    print(
      'player win rate=${(playerWins / decided * 100).toStringAsFixed(1)}%',
    );
    print('avg rounds=${(totalRounds / decided).toStringAsFixed(2)}');
    print('avg seconds=${(totalSeconds / decided).toStringAsFixed(1)}');
    print('avg hits=${(totalHits / decided).toStringAsFixed(1)}');
  }
}
