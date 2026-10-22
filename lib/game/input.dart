/// One frame of intent for a fighter.
///
/// Movement and blocking are held states; attacking is an edge that is
/// consumed by the game loop.
class FighterIntent {
  bool forward = false;
  bool backward = false;
  bool attackPressed = false;
  bool blockHeld = false;

  void clearEdges() {
    attackPressed = false;
  }

  FighterIntent copy() => FighterIntent()
    ..forward = forward
    ..backward = backward
    ..attackPressed = attackPressed
    ..blockHeld = blockHeld;
}
