import 'dart:math' as math;

import 'package:spear/game/math.dart';

import 'harness.dart';

void runMathTests() {
  test('clamp', () {
    expectClose(clamp(-1, 0, 1), 0);
    expectClose(clamp(0.4, 0, 1), 0.4);
    expectClose(clamp(3, 0, 1), 1);
  });

  test('lerp and smoothstep', () {
    expectClose(lerp(0, 10, 0.5), 5);
    expectClose(smoothstep(0), 0);
    expectClose(smoothstep(0.5), 0.5);
    expectClose(smoothstep(1), 1);
  });

  test('easing stays in range', () {
    for (var i = 0; i <= 20; i++) {
      final t = i / 20;
      expectTrue(easeOutCubic(t) >= 0 && easeOutCubic(t) <= 1);
      expectTrue(easeInOutCubic(t) >= 0 && easeInOutCubic(t) <= 1);
    }
  });

  test('vec2 rotate and length', () {
    final v = const Vec2(1, 0).rotate(math.pi / 2);
    expectVecClose(v.x, v.y, 0, 1);
    expectClose(const Vec2(3, 4).length, 5);
    expectClose(const Vec2(3, 4).normalized.x, 0.6);
    expectClose(const Vec2(3, 4).normalized.y, 0.8);
  });

  test('two bone IK reaches a straight target', () {
    final result = solveTwoBone(Vec2.zero, const Vec2(0, -1.2), 0.6, 0.6, 1);
    expectClose(result.end.y, -1.2, epsilon: 1e-4);
    expectClose(result.joint.y, -0.6, epsilon: 1e-4);
    expectClose(result.joint.x, 0, epsilon: 1e-3);
  });

  test('two bone IK bend direction', () {
    final right = solveTwoBone(Vec2.zero, const Vec2(0, -1), 0.6, 0.6, 1);
    final left = solveTwoBone(Vec2.zero, const Vec2(0, -1), 0.6, 0.6, -1);
    expectTrue(right.joint.x > 0);
    expectTrue(left.joint.x < 0);
    expectClose(right.joint.y, left.joint.y, epsilon: 1e-4);
  });

  test('two bone IK clamps an out of reach target', () {
    final result = solveTwoBone(Vec2.zero, const Vec2(0, -3), 0.6, 0.6, 1);
    expectClose(result.end.length, 1.2, epsilon: 1e-4);
  });

  test('two bone IK clamps a too close target', () {
    final result = solveTwoBone(Vec2.zero, const Vec2(0, -0.001), 0.6, 0.6, 1);
    expectTrue(result.end.length <= 0.001);
  });

  test('exponential smoothing approaches the target', () {
    var value = 0.0;
    for (var i = 0; i < 120; i++) {
      value = expSmooth(value, 1, 10, 1 / 60);
    }
    expectClose(value, 1, epsilon: 0.01);
  });
}
