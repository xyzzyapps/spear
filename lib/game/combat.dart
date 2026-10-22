import 'fighter.dart';

/// The result of one spear thrust against a defender.
enum CombatOutcome { miss, hit, blocked, parried }

class CombatResult {
  const CombatResult(this.outcome, this.distance);

  final CombatOutcome outcome;
  final double distance;
}

/// Resolves a spear thrust.
///
/// The defender blocks if the shield is already raised. A block that began
/// inside [parryWindow] is a parry, which staggers the attacker.
CombatResult resolveAttack(Fighter attacker, Fighter defender) {
  final distance = (defender.x - attacker.x).abs();
  if (distance > attackRange) {
    return CombatResult(CombatOutcome.miss, distance);
  }
  if (defender.isDead) {
    return CombatResult(CombatOutcome.miss, distance);
  }
  if (defender.state == FighterState.block) {
    if (defender.blockAge <= parryWindow) {
      return CombatResult(CombatOutcome.parried, distance);
    }
    return CombatResult(CombatOutcome.blocked, distance);
  }
  return CombatResult(CombatOutcome.hit, distance);
}
