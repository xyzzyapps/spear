import 'dart:html';
import 'dart:math' as math;

import '../game/game.dart';
import '../game/match.dart';
import 'frame.dart';
import 'scene.dart';

/// Owns the canvas, the responsive frame, and screen shake.
class Renderer {
  Renderer(this.canvas)
    : ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  final CanvasElement canvas;
  final CanvasRenderingContext2D ctx;
  final ScenePainter scene = ScenePainter();

  FrameFit fit = fitFrame(referenceWidth, referenceHeight);

  double _dpr = 1;
  double _shakeTime = 0;
  double _shakeStrength = 0;
  double _hitFlash = 0;

  void resize(double cssWidth, double cssHeight, double dpr) {
    _dpr = dpr;
    canvas.width = (cssWidth * dpr).round();
    canvas.height = (cssHeight * dpr).round();
    canvas.style.width = '${cssWidth}px';
    canvas.style.height = '${cssHeight}px';
    fit = fitFrame(cssWidth, cssHeight);
  }

  void handleEvents(List<GameEvent> events) {
    scene.handleEvents(events);
    for (final event in events) {
      switch (event.type) {
        case GameEventType.hit:
          _triggerShake(4.0);
          _hitFlash = 0.14;
        case GameEventType.blocked:
        case GameEventType.parried:
          _triggerShake(2.0);
        case GameEventType.roundStart:
        case GameEventType.fight:
        case GameEventType.roundEnd:
        case GameEventType.matchEnd:
          break;
      }
    }
  }

  void update(double dt, GameSnapshot snapshot) {
    scene.update(dt, snapshot);
  }

  void draw(double dt, GameSnapshot snapshot) {
    _shakeTime = math.max(0, _shakeTime - dt);
    _hitFlash = math.max(0, _hitFlash - dt);
    final decay = _shakeTime > 0 ? _shakeTime / 0.18 : 0;
    final shakeX = math.sin(_shakeTime * 110) * _shakeStrength * decay;
    final shakeY = math.cos(_shakeTime * 91) * _shakeStrength * 0.55 * decay;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width ?? 0, canvas.height ?? 0);
    ctx.setTransform(
      _dpr * fit.scale,
      0,
      0,
      _dpr * fit.scale,
      _dpr * (fit.offsetX + shakeX),
      _dpr * (fit.offsetY + shakeY),
    );
    scene.draw(ctx, snapshot, fit);

    if (_hitFlash > 0) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      final alpha = 0.12 * (_hitFlash / 0.14);
      ctx.fillStyle = 'rgba(110, 20, 20, ${alpha.toStringAsFixed(3)})';
      ctx.fillRect(0, 0, canvas.width ?? 0, canvas.height ?? 0);
    }
  }

  void snapPoses(GameSnapshot snapshot) {
    scene.snapPoses(snapshot);
  }

  void resetScene() {
    scene.reset();
    _hitFlash = 0;
    _shakeTime = 0;
  }

  void _triggerShake(double strength) {
    _shakeTime = 0.18;
    _shakeStrength = strength;
  }
}
