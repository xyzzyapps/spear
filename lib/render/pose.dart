import 'dart:math' as math;

import '../game/fighter.dart';
import '../game/math.dart';

/// Animation parameters for one warrior.
///
/// All positions are local units in the reference frame, where 1 unit is
/// 100 reference pixels. The warrior faces +x; the renderer mirrors the
/// right-hand warrior.
class PoseParams {
  PoseParams({
    this.bodyLean = 0,
    this.crouch = 0,
    this.torsoShift = 0,
    this.spearHandOffset = const Vec2(-0.55, 0.52),
    this.spearTilt = 0,
    this.spearSlide = 0,
    this.shieldHandOffset = const Vec2(0.45, -0.17),
    this.shieldTilt = -0.02,
    this.headTilt = 0,
    this.crestTilt = 0,
    this.rootRot = 0,
    this.backFoot = const Vec2(-0.75, 0.08),
    this.frontFoot = const Vec2(0.45, 0.08),
    this.backFootRot = 0,
    this.frontFootRot = 0,
    this.lunge = 0,
    this.bob = 0,
  });

  double bodyLean;
  double crouch;
  double torsoShift;
  Vec2 spearHandOffset;
  double spearTilt;
  double spearSlide;
  Vec2 shieldHandOffset;
  double shieldTilt;
  double headTilt;
  double crestTilt;
  double rootRot;
  Vec2 backFoot;
  Vec2 frontFoot;
  double backFootRot;
  double frontFootRot;
  double lunge;
  double bob;

  static PoseParams between(PoseParams a, PoseParams b, double t) => PoseParams(
    bodyLean: lerp(a.bodyLean, b.bodyLean, t),
    crouch: lerp(a.crouch, b.crouch, t),
    torsoShift: lerp(a.torsoShift, b.torsoShift, t),
    spearHandOffset: a.spearHandOffset.lerpTo(b.spearHandOffset, t),
    spearTilt: lerp(a.spearTilt, b.spearTilt, t),
    spearSlide: lerp(a.spearSlide, b.spearSlide, t),
    shieldHandOffset: a.shieldHandOffset.lerpTo(b.shieldHandOffset, t),
    shieldTilt: lerp(a.shieldTilt, b.shieldTilt, t),
    headTilt: lerp(a.headTilt, b.headTilt, t),
    crestTilt: lerp(a.crestTilt, b.crestTilt, t),
    rootRot: lerp(a.rootRot, b.rootRot, t),
    backFoot: a.backFoot.lerpTo(b.backFoot, t),
    frontFoot: a.frontFoot.lerpTo(b.frontFoot, t),
    backFootRot: lerp(a.backFootRot, b.backFootRot, t),
    frontFootRot: lerp(a.frontFootRot, b.frontFootRot, t),
    lunge: lerp(a.lunge, b.lunge, t),
    bob: lerp(a.bob, b.bob, t),
  );
}

PoseParams basePose() => PoseParams();

/// Computes the target pose for a fighter's current state.
PoseParams poseFor(Fighter fighter, double time) {
  final pose = basePose();
  final phase = fighter.isPlayer ? 0.0 : 1.7;
  final breath = math.sin(time * 1.6 + phase);
  final sway = math.sin(time * 0.9 + phase);

  // A guard is never completely still: weight drifts, the shield breathes,
  // the spear tip circles a little, and the crest lags behind the head.
  pose.bodyLean = breath * 0.014;
  pose.crouch = 0.004 + breath * 0.008;
  pose.torsoShift = sway * 0.025;
  pose.headTilt = sway * 0.014;
  pose.crestTilt = breath * 0.030 + sway * 0.020;
  pose.shieldHandOffset += Vec2(0, 0.014 * math.sin(time * 1.2 + phase));
  pose.spearHandOffset += Vec2(0, 0.010 * math.sin(time * 1.05 + phase + 0.4));
  pose.spearTilt += 0.012 * math.sin(time * 0.8 + phase);

  switch (fighter.state) {
    case FighterState.idle:
      break;
    case FighterState.walk:
      // Drop the hips slightly so the stride stays athletic and grounded.
      pose.crouch += 0.05;
      _applyGait(
        pose,
        fighter,
        amp: 0.22,
        lift: 0.10,
        torsoSway: 0.060,
        lean: 0.050,
      );
    case FighterState.windup:
      _applyWindup(pose, smoothstep(fighter.stateTime / attackWindup));
    case FighterState.attack:
      _applyWindup(pose, 1);
      // The thrust is a snap. The scene blends it quickly so the hit and the
      // spear tip read on the same beat.
      _applyThrust(pose, 1);
    case FighterState.recover:
      _applyWindup(pose, 1);
      _applyThrust(pose, 1);
      const hold = 0.06;
      final t = clamp(
        (fighter.stateTime - hold) / (attackRecovery - hold),
        0,
        1,
      );
      return PoseParams.between(pose, basePose(), easeInOutCubic(t));
    case FighterState.block:
      final k = smoothstep(math.min(1, fighter.stateTime / 0.12));
      pose.crouch += 0.075 * k;
      pose.bodyLean += 0.03 * k;
      pose.torsoShift -= 0.02 * k;
      pose.shieldHandOffset += const Vec2(0.05, 0.20) * k;
      pose.spearHandOffset += const Vec2(-0.04, -0.12) * k;
      pose.shieldTilt -= 0.18 * k;
      pose.headTilt -= 0.04 * k;
      if (fighter.stunTimer > 0) {
        final tremor =
            math.sin(fighter.stateTime * 120) *
            0.035 *
            (fighter.stunTimer / blockStun);
        pose.shieldTilt += tremor;
        pose.torsoShift -= tremor * 0.3;
      }
      if (fighter.moveDir != 0) {
        _applyGait(
          pose,
          fighter,
          amp: 0.15,
          lift: 0.045,
          torsoSway: 0.014,
          lean: 0.015,
        );
      }
    case FighterState.hit:
      final k = 1 - smoothstep(fighter.stateTime / hitStun);
      pose.bodyLean += 0.18 * k;
      pose.torsoShift -= 0.06 * k;
      pose.headTilt += 0.24 * k;
      pose.crestTilt += 0.30 * k;
      pose.shieldHandOffset += const Vec2(-0.04, -0.14) * k;
      pose.spearHandOffset += const Vec2(-0.12, -0.06) * k;
      pose.crouch += 0.06 * k;
      pose.backFoot += Vec2(-0.12 * k, 0.05 * math.sin(k * math.pi));
      pose.frontFoot += Vec2(-0.04 * k, 0);
      pose.backFootRot = -0.10 * k;
    case FighterState.stagger:
      final k = 1 - smoothstep(fighter.stateTime / fighter.staggerDuration);
      final wobble = math.sin(fighter.stateTime * 26) * 0.05 * k;
      pose.bodyLean += 0.22 * k + wobble;
      pose.torsoShift -= 0.05 * k + wobble * 0.4;
      pose.headTilt += 0.30 * k;
      pose.crestTilt += 0.40 * k + wobble;
      pose.shieldHandOffset += const Vec2(-0.06, -0.20) * k;
      pose.spearHandOffset += const Vec2(-0.18, -0.10) * k;
      pose.crouch += 0.10 * k;
      pose.backFoot += Vec2(-0.18 * k, 0.04 * math.sin(k * math.pi));
      pose.frontFoot += Vec2(-0.06 * k, 0);
      pose.backFootRot = -0.14 * k;
      pose.rootRot = wobble * 0.25;
    case FighterState.dead:
      final buckle = smoothstep(math.min(1, fighter.stateTime / 0.30));
      final fall = easeInOutCubic(
        clamp((fighter.stateTime - 0.10) / 0.70, 0, 1),
      );
      pose.crouch += 0.16 * buckle;
      pose.rootRot = 1.35 * fall;
      pose.bodyLean += 0.18 * buckle + 0.10 * fall;
      pose.torsoShift -= 0.06 * buckle;
      pose.headTilt += 0.35 * fall;
      pose.crestTilt += 0.55 * fall;
      pose.spearHandOffset += const Vec2(-0.22, -0.40) * fall;
      pose.shieldHandOffset += const Vec2(-0.08, -0.50) * fall;
      pose.backFoot += Vec2(-0.12 * buckle, 0.02 * buckle);
      pose.frontFoot += Vec2(0.04 * buckle, 0);
      pose.backFootRot = -0.10 * buckle;
      pose.frontFootRot = 0.06 * buckle;
  }

  return pose;
}

void _applyWindup(PoseParams pose, double k) {
  pose.bodyLean += 0.14 * k;
  pose.crouch += 0.07 * k;
  pose.torsoShift -= 0.06 * k;
  pose.spearHandOffset += const Vec2(-0.20, 0.08) * k;
  pose.spearTilt += 0.36 * k;
  pose.spearSlide -= 0.14 * k;
  pose.shieldHandOffset += const Vec2(-0.03, 0.12) * k;
  pose.shieldTilt -= 0.05 * k;
  pose.backFoot += Vec2(-0.04 * k, 0);
  pose.headTilt += 0.03 * k;
  pose.crestTilt += 0.06 * k;
}

void _applyThrust(PoseParams pose, double k) {
  final step = math.sin(math.pi * k);
  pose.lunge += 0.32 * k;
  pose.crouch += 0.06 * k;
  pose.torsoShift += 0.09 * k;
  pose.bodyLean -= 0.16 * k;
  pose.spearHandOffset += const Vec2(0.73, -0.06) * k;
  pose.spearTilt -= 0.36 * k;
  pose.spearSlide += 0.78 * k;
  pose.shieldHandOffset += const Vec2(0.18, 0.02) * k;
  pose.shieldTilt += 0.09 * k;
  pose.frontFoot += Vec2(0.28 * k, 0.05 * step * k);
  pose.backFoot += Vec2(-0.06 * k, 0.03 * step * k);
  pose.frontFootRot = -0.16 * step;
  pose.backFootRot = -0.20 * k;
  pose.headTilt -= 0.05 * k;
  pose.crestTilt -= 0.08 * k;
}

/// A planted-foot gait: the stance foot moves backward under the body with
/// heel-to-ball roll, then swings forward with a knee lift and toe drop.
void _applyGait(
  PoseParams pose,
  Fighter fighter, {
  required double amp,
  required double lift,
  required double torsoSway,
  required double lean,
}) {
  final direction = fighter.moveDir;
  if (direction == 0) return;

  final cycle = fighter.walkCycle / (2 * math.pi);
  final phase = cycle - cycle.floorToDouble();
  final front = _footStep(phase, pose.frontFoot, direction, amp, lift);
  final back = _footStep(
    (phase + 0.5) % 1.0,
    pose.backFoot,
    direction,
    amp,
    lift,
  );

  pose.frontFoot = front.position;
  pose.frontFootRot = front.rotation;
  pose.backFoot = back.position;
  pose.backFootRot = back.rotation;

  final swing = math.sin(phase * math.pi * 2);
  final doubleStep = math.cos(phase * math.pi * 4);
  pose.torsoShift += torsoSway * math.cos(phase * math.pi * 2) * direction;
  pose.bodyLean -= lean * direction;
  pose.bodyLean += 0.032 * swing * direction;
  pose.crouch += 0.028 * (0.5 + 0.5 * doubleStep);
  pose.bob = 0.012 * (1 - doubleStep);
  pose.shieldHandOffset += Vec2(0.018 * swing, 0.048 * swing);
  pose.spearHandOffset += Vec2(
    -0.018 * swing * direction,
    0.032 * math.sin(phase * math.pi * 2 + 0.4),
  );
  pose.spearTilt += 0.028 * math.sin(phase * math.pi * 2 + 0.3) * direction;
  pose.shieldTilt += 0.055 * math.sin(phase * math.pi * 2 + 0.9) * direction;
  pose.headTilt += 0.026 * math.sin(phase * math.pi * 2 + 0.6);
  pose.crestTilt += 0.055 * math.sin(phase * math.pi * 2 + 0.9);
}

_FootStep _footStep(
  double phase,
  Vec2 base,
  int direction,
  double amp,
  double lift,
) {
  final s = phase % 1.0;
  double offset;
  double height = 0;
  double rotation = 0;

  if (s < 0.55) {
    // Stance: the foot travels backward under the body and rolls toward the ball.
    final stanceT = s / 0.55;
    offset = amp * (1 - 2 * stanceT);
    if (stanceT > 0.55 && stanceT < 0.90) {
      final push = math.sin(((stanceT - 0.55) / 0.35) * math.pi);
      rotation = -0.08 * push * direction;
    }
  } else {
    // Swing: the knee bends, the foot lifts, travels forward, and drops the toe.
    final u = (s - 0.55) / 0.45;
    final eased = easeInOutCubic(u);
    offset = amp * (-1 + 2 * eased);
    // Skew lift slightly toward early swing for a natural knee pick-up.
    final liftCurve = math.sin(math.pi * math.pow(u, 0.88));
    height = lift * liftCurve;
    rotation = -0.22 * math.sin(math.pi * u);
  }

  return _FootStep(
    Vec2(base.x + direction * offset, base.y + height),
    rotation,
  );
}

class _FootStep {
  const _FootStep(this.position, this.rotation);

  final Vec2 position;
  final double rotation;
}
