import 'dart:math' as math;

/// How long an attack input stays buffered while waiting for recovery or stun
/// to finish.
const double attackInputBufferTime = 0.20;

/// One frame of intent for a fighter.
///
/// Movement and blocking are held states; attacking is an edge with a short
/// input buffer that is consumed when the fighter starts an attack.
class FighterIntent {
  bool forward = false;
  bool backward = false;
  bool attackPressed = false;
  double attackBuffer = 0;
  bool blockHeld = false;

  void queueAttack() {
    attackPressed = true;
    attackBuffer = attackInputBufferTime;
  }

  void consumeAttack() {
    attackPressed = false;
    attackBuffer = 0;
  }

  void stepBuffer(double dt) {
    if (attackBuffer > 0) {
      attackBuffer = math.max(0, attackBuffer - dt);
      attackPressed = attackBuffer > 0;
    } else {
      attackPressed = false;
    }
  }

  void clearEdges() {
    attackPressed = false;
    attackBuffer = 0;
  }

  FighterIntent copy() => FighterIntent()
    ..forward = forward
    ..backward = backward
    ..attackPressed = attackPressed
    ..attackBuffer = attackBuffer
    ..blockHeld = blockHeld;
}
