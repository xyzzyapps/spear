// ignore_for_file: avoid_print

import 'dart:math' as math;

int _passed = 0;
int _failed = 0;
final List<String> _failures = <String>[];

int get passes => _passed;
int get failures => _failed;

void test(String name, void Function() body) {
  try {
    body();
    _passed++;
    print('ok   $name');
  } catch (error, stack) {
    _failed++;
    _failures.add('$name: $error\n$stack');
    print('FAIL $name: $error');
  }
}

void expectTrue(bool value, {String? reason}) {
  if (!value) {
    throw TestFailure(reason ?? 'expected true');
  }
}

void expectFalse(bool value, {String? reason}) {
  if (value) {
    throw TestFailure(reason ?? 'expected false');
  }
}

void expectEq(Object? actual, Object? expected, {String? reason}) {
  if (actual != expected) {
    throw TestFailure(reason ?? 'expected $expected, got $actual');
  }
}

void expectClose(
  num actual,
  num expected, {
  double epsilon = 1e-6,
  String? reason,
}) {
  if ((actual - expected).abs() > epsilon) {
    throw TestFailure(reason ?? 'expected $expected +/- $epsilon, got $actual');
  }
}

void expectThrows(void Function() body, {String? reason}) {
  try {
    body();
  } on Object {
    return;
  }
  throw TestFailure(reason ?? 'expected an exception');
}

void printSummary() {
  print('');
  print('${_passed + _failed} tests: $_passed passed, $_failed failed');
  if (_failed > 0) {
    print('');
    for (final failure in _failures) {
      print(failure);
    }
  }
}

class TestFailure implements Exception {
  TestFailure(this.message);

  final String message;

  @override
  String toString() => 'TestFailure: $message';
}

/// Small helper for comparing vectors component-wise.
void expectVecClose(
  double ax,
  double ay,
  double bx,
  double by, {
  double epsilon = 1e-6,
}) {
  expectClose(ax, bx, epsilon: epsilon);
  expectClose(ay, by, epsilon: epsilon);
}

/// Convenience for angle checks in radians.
double angleDelta(double a, double b) {
  var delta = (a - b) % (2 * math.pi);
  if (delta > math.pi) delta -= 2 * math.pi;
  if (delta < -math.pi) delta += 2 * math.pi;
  return delta.abs();
}
