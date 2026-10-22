import 'dart:html';

import '../game/game.dart';

/// Keyboard controls for the player.
class KeyboardInput {
  KeyboardInput({required this.game, required this.onStart});

  final Game game;
  final void Function() onStart;

  void attach() {
    document.onKeyDown.listen((event) {
      final key = (event.key ?? '').toLowerCase();
      if (key == ' ' || key == 'arrowleft' || key == 'arrowright') {
        event.preventDefault();
      }
      if (event.repeat ?? false) return;

      switch (key) {
        case 'a':
        case 'arrowleft':
          game.setBackward(true);
        case 'd':
        case 'arrowright':
          game.setForward(true);
        case 'j':
        case ' ':
          game.pressAttack();
        case 'k':
        case 'shift':
          game.setBlock(true);
        case 'enter':
          onStart();
      }
    });

    document.onKeyUp.listen((event) {
      final key = (event.key ?? '').toLowerCase();
      switch (key) {
        case 'a':
        case 'arrowleft':
          game.setBackward(false);
        case 'd':
        case 'arrowright':
          game.setForward(false);
        case 'k':
        case 'shift':
          game.setBlock(false);
      }
    });
  }
}

/// On-screen hold buttons for touch and pointer input.
class TouchInput {
  TouchInput({required this.game});

  final Game game;

  void attach() {
    _bindHold(querySelector('#btn-back') as Element, game.setBackward);
    _bindHold(querySelector('#btn-forward') as Element, game.setForward);
    _bindHold(querySelector('#btn-block') as Element, game.setBlock);

    final attack = querySelector('#btn-attack') as Element;
    attack.onMouseDown.listen((_) => game.pressAttack());
    attack.onTouchStart.listen((event) {
      event.preventDefault();
      game.pressAttack();
    });

    window.onMouseUp.listen((_) => _releaseAll());
    window.onTouchEnd.listen((_) => _releaseAll());
    window.onTouchCancel.listen((_) => _releaseAll());
  }

  void _bindHold(Element element, void Function(bool) setter) {
    element.onMouseDown.listen((_) => setter(true));
    element.onMouseLeave.listen((_) => setter(false));
    element.onTouchStart.listen((event) {
      event.preventDefault();
      setter(true);
    });
    element.onTouchEnd.listen((event) {
      event.preventDefault();
      setter(false);
    });
    element.onTouchCancel.listen((event) {
      event.preventDefault();
      setter(false);
    });
  }

  void _releaseAll() {
    game.setForward(false);
    game.setBackward(false);
    game.setBlock(false);
  }
}
