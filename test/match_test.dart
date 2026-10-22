import 'package:spear/game/fighter.dart';
import 'package:spear/game/input.dart';
import 'package:spear/game/match.dart';

import 'harness.dart';

Match freshMatch() => Match(seed: 1);

void putInFighting(Match match) {
  match.phase = MatchPhase.fighting;
  match.phaseTime = 0;
  match.roundTime = roundDuration;
  match.player.x = -3.2;
  match.bot.x = 3.2;
}

void runMatchTests() {
  test('a new match starts at round one with full health', () {
    final match = freshMatch();
    expectEq(match.round, 1);
    expectEq(match.phase, MatchPhase.roundIntro);
    expectEq(match.player.hp, maxHp);
    expectEq(match.bot.hp, maxHp);
    expectEq(match.playerRoundWins, 0);
    expectEq(match.botRoundWins, 0);
  });

  test('round intro becomes fighting', () {
    final match = freshMatch();
    match.update(1.3, FighterIntent());
    expectEq(match.phase, MatchPhase.fighting);
    expectEq(match.banner, 'FIGHT');
  });

  test('a landed hit draws blood on the attacker and defender', () {
    final match = Match(seed: 1, botEnabled: false);
    match.phase = MatchPhase.fighting;
    match.player.x = -1.0;
    match.bot.x = 0.5;
    match.player.state = FighterState.attack;
    match.player.stateTime = 0;
    match.player.hasLandedHit = false;
    match.update(1 / 60, FighterIntent());
    expectEq(match.bot.hp, maxHp - 1);
    expectTrue(match.bot.wounded);
    expectTrue(match.player.bloodyTip);
    expectFalse(match.player.wounded);
  });

  test('five hits ends the round', () {
    final match = freshMatch();
    putInFighting(match);
    for (var i = 0; i < maxHp; i++) {
      match.player.takeHit();
    }
    expectEq(match.player.state, FighterState.dead);
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.roundEnd);
    expectEq(match.botRoundWins, 1);
    expectEq(match.banner, 'K.O.');
  });

  test('round end advances to the next round', () {
    final match = freshMatch();
    putInFighting(match);
    match.player.hp = 0;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.roundEnd);
    match.phaseTime = 2.1;
    match.update(1 / 60, FighterIntent());
    expectEq(match.round, 2);
    expectEq(match.phase, MatchPhase.roundIntro);
    expectEq(match.player.hp, maxHp);
    expectEq(match.bot.hp, maxHp);
  });

  test('timeout awards the fighter with more health', () {
    final match = freshMatch();
    putInFighting(match);
    match.roundTime = 0.001;
    match.player.hp = 3;
    match.bot.hp = 2;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.roundEnd);
    expectEq(match.endReason, EndReason.timeout);
    expectEq(match.playerRoundWins, 1);
    expectEq(match.banner, 'TIME - YOU');
  });

  test('timeout with equal health is a draw', () {
    final match = freshMatch();
    putInFighting(match);
    match.roundTime = 0.001;
    match.player.hp = 3;
    match.bot.hp = 3;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.roundEnd);
    expectEq(match.playerRoundWins, 0);
    expectEq(match.botRoundWins, 0);
    expectEq(match.banner, 'TIME - DRAW');
  });

  test('first to six round wins ends the match', () {
    final match = freshMatch();
    match.playerRoundWins = 5;
    match.botRoundWins = 0;
    match.round = 10;
    putInFighting(match);
    match.bot.hp = 0;
    match.update(1 / 60, FighterIntent());
    expectEq(match.playerRoundWins, 6);
    expectEq(match.phase, MatchPhase.roundEnd);
    match.phaseTime = 2.1;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.matchEnd);
    expectEq(match.result, MatchResult.playerWin);
  });

  test('a 5-5 score after ten rounds goes to sudden death', () {
    final match = freshMatch();
    match.playerRoundWins = 5;
    match.botRoundWins = 5;
    match.round = 10;
    putInFighting(match);
    match.player.hp = 0;
    match.bot.hp = 0;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.roundEnd);
    expectEq(match.playerRoundWins, 5);
    expectEq(match.botRoundWins, 5);
    match.phaseTime = 2.1;
    match.update(1 / 60, FighterIntent());
    expectEq(match.round, 11);
    expectEq(match.phase, MatchPhase.roundIntro);
    expectTrue(match.isSuddenDeath);
  });

  test('a drawn sudden death ends the match as a draw', () {
    final match = freshMatch();
    match.playerRoundWins = 5;
    match.botRoundWins = 5;
    match.round = 10;
    putInFighting(match);
    match.player.hp = 0;
    match.bot.hp = 0;
    match.update(1 / 60, FighterIntent());
    match.phaseTime = 2.1;
    match.update(1 / 60, FighterIntent());
    expectTrue(match.isSuddenDeath);

    putInFighting(match);
    match.player.hp = 0;
    match.bot.hp = 0;
    match.update(1 / 60, FighterIntent());
    match.phaseTime = 2.1;
    match.update(1 / 60, FighterIntent());
    expectEq(match.phase, MatchPhase.matchEnd);
    expectEq(match.result, MatchResult.draw);
  });

  test('events are drained once', () {
    final match = freshMatch();
    final first = match.drainEvents();
    expectTrue(first.isNotEmpty);
    final second = match.drainEvents();
    expectEq(second.length, 0);
  });
}
