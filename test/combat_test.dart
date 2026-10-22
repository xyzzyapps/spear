import 'package:spear/game/combat.dart';
import 'package:spear/game/fighter.dart';

import 'harness.dart';

Fighter fighter({required int facing, required double x}) =>
    Fighter(isPlayer: facing > 0, facing: facing, x: x);

void runCombatTests() {
  test('a thrust in range hits an idle defender', () {
    final attacker = fighter(facing: 1, x: -1);
    final defender = fighter(facing: -1, x: 0.5);
    final result = resolveAttack(attacker, defender);
    expectEq(result.outcome, CombatOutcome.hit);
    expectClose(result.distance, 1.5);
  });

  test('a thrust out of range misses', () {
    final attacker = fighter(facing: 1, x: -2);
    final defender = fighter(facing: -1, x: 2);
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.miss);
  });

  test('a raised shield blocks', () {
    final attacker = fighter(facing: 1, x: -1);
    final defender = fighter(facing: -1, x: 0.5);
    defender.startBlock();
    defender.update(0.2);
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.blocked);
  });

  test('a fresh shield parries', () {
    final attacker = fighter(facing: 1, x: -1);
    final defender = fighter(facing: -1, x: 0.5);
    defender.startBlock();
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.parried);
  });

  test('a dead defender cannot be hit again', () {
    final attacker = fighter(facing: 1, x: -1);
    final defender = fighter(facing: -1, x: 0.5);
    defender.state = FighterState.dead;
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.miss);
  });

  test('a stunned defender can still be hit', () {
    final attacker = fighter(facing: 1, x: -1);
    final defender = fighter(facing: -1, x: 0.5);
    defender.state = FighterState.stagger;
    expectEq(resolveAttack(attacker, defender).outcome, CombatOutcome.hit);
  });
}
