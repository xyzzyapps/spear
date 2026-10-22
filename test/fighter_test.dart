import 'package:spear/game/combat.dart';
import 'package:spear/game/fighter.dart';
import 'package:spear/game/input.dart';

import 'harness.dart';

Fighter makeFighter({int facing = 1, double x = 0}) =>
    Fighter(isPlayer: facing > 0, facing: facing, x: x);

void runFighterTests() {
  test('reset restores health and idle state', () {
    final fighter = makeFighter();
    fighter.hp = 2;
    fighter.state = FighterState.hit;
    fighter.reset(x: -1.6);
    expectEq(fighter.hp, maxHp);
    expectEq(fighter.state, FighterState.idle);
    expectClose(fighter.x, -1.6);
  });

  test('a hit leaves a wound and reset cleans it', () {
    final fighter = makeFighter();
    fighter.takeHit();
    expectTrue(fighter.wounded);
    fighter.reset(x: -1.6);
    expectFalse(fighter.wounded);
    expectFalse(fighter.bloodyTip);
  });

  test('attack runs windup, active, recover, idle', () {
    final fighter = makeFighter();
    fighter.startAttack();
    expectEq(fighter.state, FighterState.windup);
    expectTrue(fighter.attackCooldown > 0);

    fighter.update(attackWindup);
    expectEq(fighter.state, FighterState.attack);

    fighter.update(attackActive);
    expectEq(fighter.state, FighterState.recover);

    fighter.update(attackRecovery);
    expectEq(fighter.state, FighterState.idle);
  });

  test('attack is blocked during recovery', () {
    final fighter = makeFighter();
    fighter.startAttack();
    fighter.update(attackWindup);
    fighter.update(attackActive);
    expectEq(fighter.state, FighterState.recover);
    fighter.startAttack();
    expectEq(fighter.state, FighterState.recover);
  });

  test('block starts, ages, and releases', () {
    final fighter = makeFighter();
    fighter.startBlock();
    expectEq(fighter.state, FighterState.block);
    expectTrue(fighter.blockHeld);
    fighter.update(0.2);
    expectClose(fighter.blockAge, 0.2);
    fighter.releaseBlock();
    expectEq(fighter.state, FighterState.idle);
    expectFalse(fighter.blockHeld);
  });

  test('block parry window expires', () {
    final attacker = makeFighter(facing: 1, x: -1);
    final defender = makeFighter(facing: -1, x: 0);
    defender.startBlock();
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.parried);
    defender.update(parryWindow + 0.01);
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.blocked);
  });

  test('five hits kills a fighter', () {
    final fighter = makeFighter();
    for (var i = 0; i < maxHp; i++) {
      fighter.takeHit();
    }
    expectEq(fighter.hp, 0);
    expectEq(fighter.state, FighterState.dead);
    expectTrue(fighter.isDead);
    expectFalse(fighter.canAct);
  });

  test('hit stun returns to idle', () {
    final fighter = makeFighter();
    fighter.takeHit();
    expectEq(fighter.state, FighterState.hit);
    expectEq(fighter.hp, maxHp - 1);
    fighter.update(hitStun);
    expectEq(fighter.state, FighterState.idle);
  });

  test('stagger returns to idle after its duration', () {
    final fighter = makeFighter();
    fighter.stagger(0.5);
    expectEq(fighter.state, FighterState.stagger);
    fighter.update(0.5);
    expectEq(fighter.state, FighterState.idle);
  });

  test('forward movement follows facing', () {
    final left = makeFighter(facing: 1);
    final right = makeFighter(facing: -1);
    final intent = FighterIntent()..forward = true;
    left.applyIntent(intent, 1);
    right.applyIntent(intent, 1);
    expectClose(left.x, moveSpeed);
    expectClose(right.x, -moveSpeed);
  });

  test('blocking halves movement speed', () {
    final fighter = makeFighter();
    fighter.startBlock();
    final intent = FighterIntent()
      ..forward = true
      ..blockHeld = true;
    fighter.applyIntent(intent, 1);
    expectClose(fighter.x, blockMoveSpeed);
    expectEq(fighter.state, FighterState.block);
  });

  test('attack and block intents enter the right states', () {
    final fighter = makeFighter();
    fighter.applyIntent(FighterIntent()..attackPressed = true, 1 / 60);
    expectEq(fighter.state, FighterState.windup);

    final blocker = makeFighter();
    blocker.applyIntent(FighterIntent()..blockHeld = true, 1 / 60);
    expectEq(blocker.state, FighterState.block);
  });

  test('stun prevents actions', () {
    final fighter = makeFighter();
    fighter.stunTimer = 0.2;
    fighter.applyIntent(FighterIntent()..attackPressed = true, 1 / 60);
    expectEq(fighter.state, FighterState.idle);
  });

  test('buffered attack fires immediately when recovery finishes', () {
    final fighter = makeFighter();
    fighter.startAttack();
    fighter.update(attackWindup);
    fighter.update(attackActive);
    fighter.update(attackRecovery - 0.05);
    expectEq(fighter.state, FighterState.recover);

    final intent = FighterIntent()..queueAttack();
    fighter.applyIntent(intent, 0.02);
    intent.stepBuffer(0.02);
    expectTrue(intent.attackPressed);

    fighter.update(0.06);
    expectEq(fighter.state, FighterState.idle);
    fighter.applyIntent(intent, 0.02);
    expectEq(fighter.state, FighterState.windup);
    expectFalse(intent.attackPressed);
  });
}
