import 'package:spear/game/bot.dart';
import 'package:spear/game/fighter.dart';

import 'harness.dart';

Fighter botFighter({double x = 1.5}) =>
    Fighter(isPlayer: false, facing: -1, x: x);

Fighter playerFighter({double x = 0}) =>
    Fighter(isPlayer: true, facing: 1, x: x);

void runBotTests() {
  test('difficulty scales from round one to ten', () {
    final brain = BotBrain(seed: 3);
    brain.setRound(1);
    final easyReaction = brain.reactionTime;
    final easyAggression = brain.aggression;
    brain.setRound(10);
    expectTrue(brain.reactionTime < easyReaction);
    expectTrue(brain.aggression > easyAggression);
    expectTrue(brain.blockChance > 0.7);
  });

  test('the same seed produces the same intents', () {
    final brainA = BotBrain(seed: 42)..setRound(7);
    final brainB = BotBrain(seed: 42)..setRound(7);
    final botA = botFighter();
    final botB = botFighter();
    final playerA = playerFighter();
    final playerB = playerFighter();

    for (var i = 0; i < 200; i++) {
      final intentA = brainA.decide(1 / 60, botA, playerA, true);
      final intentB = brainB.decide(1 / 60, botB, playerB, true);
      expectEq(intentA.forward, intentB.forward);
      expectEq(intentA.backward, intentB.backward);
      expectEq(intentA.attackPressed, intentB.attackPressed);
      expectEq(intentA.blockHeld, intentB.blockHeld);
    }
  });

  test('the bot blocks a visible windup', () {
    final brain = BotBrain(seed: 5)..setRound(10);
    final bot = botFighter();
    final player = playerFighter();
    player.state = FighterState.windup;
    var sawBlock = false;
    for (var i = 0; i < 200; i++) {
      final intent = brain.decide(1 / 60, bot, player, true);
      if (intent.blockHeld) sawBlock = true;
    }
    expectTrue(sawBlock);
  });

  test('the bot attacks an open opponent in range', () {
    final brain = BotBrain(seed: 9)..setRound(10);
    final bot = botFighter();
    final player = playerFighter();
    player.state = FighterState.recover;
    var sawAttack = false;
    for (var i = 0; i < 200; i++) {
      final intent = brain.decide(1 / 60, bot, player, true);
      if (intent.attackPressed) sawAttack = true;
    }
    expectTrue(sawAttack);
  });

  test('the bot advances when out of range', () {
    final brain = BotBrain(seed: 11)..setRound(1);
    final bot = botFighter(x: 4);
    final player = playerFighter();
    var sawForward = false;
    for (var i = 0; i < 200; i++) {
      final intent = brain.decide(1 / 60, bot, player, true);
      if (intent.forward) sawForward = true;
    }
    expectTrue(sawForward);
  });

  test('the bot waits for the opening beat', () {
    final brain = BotBrain(seed: 17)..setRound(1);
    final bot = botFighter();
    final player = playerFighter();
    player.state = FighterState.windup;
    final intent = brain.decide(0.1, bot, player, true);
    expectFalse(intent.forward);
    expectFalse(intent.backward);
    expectFalse(intent.attackPressed);
    expectFalse(intent.blockHeld);
  });

  test('the bot does nothing while attacking or dead', () {
    final brain = BotBrain(seed: 13)..setRound(5);
    final bot = botFighter();
    final player = playerFighter();
    bot.state = FighterState.windup;
    final attacking = brain.decide(1 / 60, bot, player, true);
    expectFalse(attacking.attackPressed);
    expectFalse(attacking.blockHeld);

    bot.state = FighterState.dead;
    final dead = brain.decide(1 / 60, bot, player, true);
    expectFalse(dead.forward);
    expectFalse(dead.attackPressed);
  });
}
