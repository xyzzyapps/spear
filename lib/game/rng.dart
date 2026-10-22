/// A small deterministic xorshift32 random number generator.
///
/// Determinism keeps bot behaviour reproducible in tests and in the
/// `?seed=` debug mode.
class Rng {
  Rng(int seed) : _state = (seed == 0 ? 0x9E3779B9 : seed) & 0xFFFFFFFF;

  int _state;

  int nextInt() {
    var x = _state;
    x ^= (x << 13) & 0xFFFFFFFF;
    x ^= x >> 17;
    x ^= (x << 5) & 0xFFFFFFFF;
    _state = x & 0xFFFFFFFF;
    return _state;
  }

  double nextDouble() => nextInt() / 4294967296.0;

  double range(double min, double max) => min + nextDouble() * (max - min);

  bool chance(double probability) => nextDouble() < probability;

  int pick(int max) {
    if (max <= 1) return 0;
    return (nextDouble() * max).floor().clamp(0, max - 1).toInt();
  }
}
