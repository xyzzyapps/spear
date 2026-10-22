import 'package:spear/game/fighter.dart';
import 'package:spear/game/game.dart';
import 'package:spear/game/match.dart';

import 'harness.dart';

void runGameTests() {
  test('the game does not start before start()', () {
    final game = Game(seed: 1);
    expectFalse(game.snapshot().started);
    game.update(1 / 60);
    expectTrue(game.time > 0);
    expectFalse(game.snapshot().started);
  });

  test('start enters round one', () {
    final game = Game(seed: 1)..start();
    final snapshot = game.snapshot();
    expectTrue(snapshot.started);
    expectEq(snapshot.round, 1);
    expectEq(snapshot.playerHp, maxHp);
    expectEq(snapshot.botHp, maxHp);
  });

  test('attack input enters windup during fighting', () {
    final game = Game(seed: 1)..start();
    game.match.phase = MatchPhase.fighting;
    game.pressAttack();
    game.update(1 / 60);
    expectEq(game.snapshot().player.state, FighterState.windup);
  });

  test('rematch resets the match', () {
    final game = Game(seed: 1)..start();
    game.match.playerRoundWins = 3;
    game.rematch();
    final snapshot = game.snapshot();
    expectEq(snapshot.playerWins, 0);
    expectEq(snapshot.round, 1);
    expectTrue(snapshot.started);
  });

  test('the bot can be disabled for deterministic checks', () {
    final game = Game(seed: 1, botEnabled: false)..start();
    game.match.phase = MatchPhase.fighting;
    game.update(1);
    expectEq(game.snapshot().bot.state, FighterState.idle);
    expectEq(game.snapshot().playerHp, maxHp);
  });

  test('events are exposed to the renderer once', () {
    final game = Game(seed: 1)..start();
    game.update(1 / 60);
    final events = game.takeEvents();
    expectTrue(events.isNotEmpty);
    expectEq(game.takeEvents().length, 0);
  });
}
