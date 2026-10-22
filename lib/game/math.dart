import 'dart:math' as math;

/// Clamps [value] into the inclusive range [min, max].
double clamp(double value, double min, double max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/// Linear interpolation between [a] and [b].
double lerp(double a, double b, double t) => a + (b - a) * t;

/// Smooth Hermite interpolation of a 0..1 value.
double smoothstep(double t) {
  final x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

/// Ease-out cubic interpolation of a 0..1 value.
double easeOutCubic(double t) {
  final x = clamp(t, 0, 1);
  final u = 1 - x;
  return 1 - u * u * u;
}

/// Ease-in-out cubic interpolation of a 0..1 value.
double easeInOutCubic(double t) {
  final x = clamp(t, 0, 1);
  if (x < 0.5) return 4 * x * x * x;
  final u = -2 * x + 2;
  return 1 - (u * u * u) / 2;
}

/// Exponential smoothing toward [target] at [rate] per second.
double expSmooth(double current, double target, double rate, double dt) {
  if (dt <= 0) return current;
  return current + (target - current) * (1 - math.exp(-rate * dt));
}

/// A two-dimensional vector used by the renderer and the IK solver.
class Vec2 {
  const Vec2(this.x, this.y);

  final double x;
  final double y;

  static const Vec2 zero = Vec2(0, 0);

  Vec2 operator +(Vec2 other) => Vec2(x + other.x, y + other.y);
  Vec2 operator -(Vec2 other) => Vec2(x - other.x, y - other.y);
  Vec2 operator *(double scale) => Vec2(x * scale, y * scale);

  double get length => math.sqrt(x * x + y * y);

  Vec2 get normalized {
    final l = length;
    if (l < 1e-9) return zero;
    return Vec2(x / l, y / l);
  }

  /// Counter-clockwise perpendicular vector.
  Vec2 get perp => Vec2(-y, x);

  double get angle => math.atan2(y, x);

  Vec2 rotate(double radians) {
    final c = math.cos(radians);
    final s = math.sin(radians);
    return Vec2(x * c - y * s, x * s + y * c);
  }

  Vec2 lerpTo(Vec2 target, double t) =>
      Vec2(x + (target.x - x) * t, y + (target.y - y) * t);

  double distanceTo(Vec2 other) => (this - other).length;

  @override
  String toString() => 'Vec2($x, $y)';

  @override
  bool operator ==(Object other) =>
      other is Vec2 && other.x == x && other.y == y;

  @override
  int get hashCode => Object.hash(x, y);
}

/// Result of a two-bone IK solve.
class IkResult {
  const IkResult(this.joint, this.end);

  /// The elbow or knee position.
  final Vec2 joint;

  /// The reachable end position, clamped to the limb length.
  final Vec2 end;
}

/// Solves a two-bone IK chain in 2D.
///
/// [root] is the shoulder or hip, [target] the hand or foot.
/// [bend] is +1 or -1 and selects which side the joint bends toward.
IkResult solveTwoBone(
  Vec2 root,
  Vec2 target,
  double upperLength,
  double lowerLength,
  double bend,
) {
  final delta = target - root;
  final rawDistance = delta.length;
  final minReach = (upperLength - lowerLength).abs() + 1e-6;
  final maxReach = upperLength + lowerLength - 1e-6;
  final distance = clamp(rawDistance, minReach, maxReach);
  final direction = rawDistance < 1e-9
      ? const Vec2(0, -1)
      : delta * (1 / rawDistance);
  final along =
      (upperLength * upperLength -
          lowerLength * lowerLength +
          distance * distance) /
      (2 * distance);
  final height = math.sqrt(
    math.max(0, upperLength * upperLength - along * along),
  );
  final mid = root + direction * along;
  final joint = mid + direction.perp * (height * bend);
  final end = root + direction * distance;
  return IkResult(joint, end);
}
