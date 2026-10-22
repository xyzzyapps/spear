import 'dart:math' as math;

import 'package:spear/game/fighter.dart';
import 'package:spear/render/pose.dart';

import 'harness.dart';

Fighter fighter() => Fighter(isPlayer: true, facing: 1, x: -1.6);

void runPoseTests() {
  test('idle base keeps the reference stance', () {
    final pose = poseFor(fighter(), 0);
    expectClose(pose.frontFoot.x, 0.45);
    expectClose(pose.frontFoot.y, 0.08);
    expectClose(pose.backFoot.x, -0.75);
    expectClose(pose.backFoot.y, 0.08);
    expectTrue(pose.torsoShift.abs() < 0.001);
    expectTrue(
      pose.spearHandOffset.y > 0.5,
      reason: 'overhand grip sits above the shoulder',
    );
  });

  test('walk lifts the swing foot and shifts the torso', () {
    final walker = fighter()
      ..state = FighterState.walk
      ..moveDir = 1
      ..walkCycle = 0.6 * 2 * math.pi;
    final pose = poseFor(walker, 0);
    expectTrue(pose.frontFoot.y > 0.09, reason: 'swing foot should lift');
    expectTrue(
      pose.torsoShift.abs() > 0.01,
      reason: 'weight should shift over the stance foot',
    );
    expectTrue(pose.frontFootRot < 0, reason: 'swing toe should drop');
  });

  test('walk plants the stance foot', () {
    final walker = fighter()
      ..state = FighterState.walk
      ..moveDir = 1
      ..walkCycle = 0;
    final pose = poseFor(walker, 0);
    expectClose(pose.frontFoot.y, 0.08);
    expectClose(pose.backFoot.y, 0.08);
    expectClose(pose.frontFoot.x, 0.67);
  });

  test('attack lunges, steps, and extends the spear', () {
    final attacker = fighter()..state = FighterState.attack;
    final pose = poseFor(attacker, 0);
    expectTrue(pose.lunge > 0.2);
    expectTrue(pose.frontFoot.x > 0.6);
    expectTrue(pose.backFoot.x > -0.9);
    expectTrue(pose.spearHandOffset.x > -0.1);
    expectTrue(pose.torsoShift > 0.02);
    expectTrue(pose.spearSlide > 0.15);
    expectTrue(pose.spearTilt.abs() < 0.05);
  });

  test('windup draws the spear back and high before the poke', () {
    final attacker = fighter()
      ..state = FighterState.windup
      ..stateTime = 0.18;
    final pose = poseFor(attacker, 0);
    expectTrue(pose.spearTilt > 0.3);
    expectTrue(pose.spearSlide < -0.05);
    expectTrue(pose.spearHandOffset.x < -0.65);
    expectTrue(pose.shieldHandOffset.y > -0.1);
  });

  test('block raises the shield and crouches', () {
    final blocker = fighter()
      ..state = FighterState.block
      ..stateTime = 0.2;
    final pose = poseFor(blocker, 0);
    expectTrue(pose.shieldHandOffset.y > 0.0);
    expectTrue(pose.crouch > 0.06);
    expectTrue(pose.shieldTilt < -0.15);
  });

  test('death falls after the knee buckle', () {
    final fallen = fighter()
      ..state = FighterState.dead
      ..stateTime = 0.8;
    final pose = poseFor(fallen, 0);
    expectTrue(pose.rootRot > 1.0);
    expectTrue(pose.crouch > 0.1);
  });

  test('pose interpolation carries the new motion fields', () {
    final a = PoseParams(torsoShift: 0, frontFootRot: 0);
    final b = PoseParams(torsoShift: 1, frontFootRot: 0.5);
    final middle = PoseParams.between(a, b, 0.5);
    expectClose(middle.torsoShift, 0.5);
    expectClose(middle.frontFootRot, 0.25);
  });

  test('walk cycle adds vertical hip bob and stance push-off roll', () {
    final walker = fighter()
      ..state = FighterState.walk
      ..moveDir = 1
      ..walkCycle = 0.25 * 2 * math.pi;
    final pose = poseFor(walker, 0);
    expectTrue(pose.bob > 0.01, reason: 'single-support phase should bob up');
    expectTrue(
      pose.backFootRot != 0 || pose.frontFootRot != 0,
      reason: 'feet should articulate during stride',
    );
  });
}
