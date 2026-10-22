import 'dart:html';
import 'dart:math' as math;

import 'game/game.dart';
import 'render/renderer.dart';
import 'ui/hud.dart';
import 'ui/input.dart';

/// Boots the canvas loop and wires input to the game.
class SpearApp {
  SpearApp({
    required this.canvas,
    required this.game,
    required this.renderer,
    required this.hud,
    required bool staticPose,
    required this.autoplay,
  }) : _staticPose = staticPose;

  final CanvasElement canvas;
  final Game game;
  final Renderer renderer;
  final Hud hud;
  final bool autoplay;

  bool _staticPose;
  double _lastTime = 0;
  late final KeyboardInput _keyboard;
  late final TouchInput _touch;

  void boot() {
    _keyboard = KeyboardInput(game: game, onStart: _onStart);
    _touch = TouchInput(game: game);
    _keyboard.attach();
    _touch.attach();
    hud.startButton.onClick.listen((_) => _onStart());

    _resize();
    window.onResize.listen((_) => _resize());

    if (!_staticPose && autoplay) {
      game.start();
      renderer.resetScene();
    }

    document.documentElement!.dataset['ready'] = '1';
    window.requestAnimationFrame(_tick);
  }

  void _resize() {
    final width = (window.innerWidth ?? 1600).toDouble();
    final height = (window.innerHeight ?? 766).toDouble();
    final dpr = window.devicePixelRatio.toDouble();
    renderer.resize(width, height, dpr);
  }

  void _tick(num milliseconds) {
    final now = milliseconds / 1000;
    final dt = _lastTime == 0
        ? 1 / 60
        : math.min(0.033, math.max(0.0, now - _lastTime));
    _lastTime = now;

    if (_staticPose) {
      final snapshot = game.snapshot();
      renderer.snapPoses(snapshot);
      renderer.draw(0, snapshot);
      hud.update(snapshot);
      _updateDebug(snapshot);
    } else {
      game.update(dt);
      final events = game.takeEvents();
      renderer.handleEvents(events);
      final snapshot = game.snapshot();
      renderer.update(dt, snapshot);
      renderer.draw(dt, snapshot);
      hud.update(snapshot);
      _updateDebug(snapshot);
    }

    window.requestAnimationFrame(_tick);
  }

  void _onStart() {
    document.body?.classes.remove('preview');
    final snapshot = game.snapshot();
    if (!snapshot.started) {
      game.start();
      _staticPose = false;
    } else if (snapshot.isMatchOver) {
      game.rematch();
      _staticPose = false;
    } else {
      return;
    }
    renderer.resetScene();
    hud.update(game.snapshot());
  }

  void _updateDebug(GameSnapshot snapshot) {
    final data = document.documentElement!.dataset;
    data['phase'] = snapshot.phase.name;
    data['round'] = '${snapshot.round}';
    data['playerHp'] = '${snapshot.playerHp}';
    data['botHp'] = '${snapshot.botHp}';
    data['playerWins'] = '${snapshot.playerWins}';
    data['botWins'] = '${snapshot.botWins}';
    data['playerState'] = snapshot.player.state.name;
    data['botState'] = snapshot.bot.state.name;
    data['started'] = snapshot.started ? '1' : '0';
    data['time'] = snapshot.time.toStringAsFixed(2);
  }
}
