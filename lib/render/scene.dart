import 'dart:html';
import 'dart:math' as math;

import '../game/fighter.dart';
import '../game/game.dart';
import '../game/match.dart';
import '../game/math.dart';
import 'bands.dart';
import 'frame.dart';
import 'palette.dart';
import 'particles.dart';
import 'pose.dart';
import 'warrior.dart';

/// Draws the frieze, the title, both fighters, and impact debris.
class ScenePainter {
  ScenePainter() {
    _playerPainter = WarriorPainter(
      shieldRadius: 0.50,
      device: ShieldDevice.rosette,
      crestColor: Palette.crestRed,
      crestLight: Palette.crestRedLight,
      crestDark: Palette.crestRedDark,
    );
    _botPainter = WarriorPainter(
      shieldRadius: 0.68,
      device: ShieldDevice.lambda,
      crestColor: Palette.cream,
      crestLight: Palette.creamBright,
      crestDark: Palette.creamDim,
      shieldHandBias: const Vec2(0, 0.20),
      shieldCenterOffset: const Vec2(0.20, 0.10),
      stanceBackBias: -0.10,
    );
  }

  final BandTextures _bands = BandTextures();
  final ParticleSystem _particles = ParticleSystem();
  late final WarriorPainter _playerPainter;
  late final WarriorPainter _botPainter;

  PoseParams? _playerPose;
  PoseParams? _botPose;

  void update(double dt, GameSnapshot snapshot) {
    final targetPlayer = poseFor(snapshot.player, snapshot.time);
    final targetBot = poseFor(snapshot.bot, snapshot.time);
    if (_playerPose == null || _botPose == null) {
      _playerPose = targetPlayer;
      _botPose = targetBot;
    } else {
      final playerBlend = 1 - math.exp(-_poseRate(snapshot.player.state) * dt);
      final botBlend = 1 - math.exp(-_poseRate(snapshot.bot.state) * dt);
      _playerPose = PoseParams.between(_playerPose!, targetPlayer, playerBlend);
      _botPose = PoseParams.between(_botPose!, targetBot, botBlend);
    }
    _particles.update(dt);
  }

  double _poseRate(FighterState state) {
    return switch (state) {
      FighterState.idle => 20,
      FighterState.walk => 24,
      FighterState.windup => 40,
      FighterState.attack => 80,
      FighterState.recover => 30,
      FighterState.block => 26,
      FighterState.hit => 34,
      FighterState.stagger => 30,
      FighterState.dead => 16,
    };
  }

  void snapPoses(GameSnapshot snapshot) {
    _playerPose = poseFor(snapshot.player, snapshot.time);
    _botPose = poseFor(snapshot.bot, snapshot.time);
  }

  void handleEvents(List<GameEvent> events) {
    for (final event in events) {
      switch (event.type) {
        case GameEventType.hit:
          _particles.spawnHit(event.x, event.y);
          _particles.spawnBlood(event.x, event.y);
        case GameEventType.blocked:
        case GameEventType.parried:
          _particles.spawnBlock(event.x, event.y);
        case GameEventType.roundStart:
        case GameEventType.fight:
        case GameEventType.roundEnd:
        case GameEventType.matchEnd:
          break;
      }
    }
  }

  void reset() {
    _particles.clear();
    _playerPose = null;
    _botPose = null;
  }

  void draw(CanvasRenderingContext2D ctx, GameSnapshot snapshot, FrameFit fit) {
    _bands.draw(ctx, fit);
    _drawTitle(ctx);

    final playerPose = _playerPose ?? poseFor(snapshot.player, snapshot.time);
    final botPose = _botPose ?? poseFor(snapshot.bot, snapshot.time);

    // Put the attacker on top so the spear tip visibly crosses the defender's
    // shield instead of disappearing behind the defender.
    final playerAttacking = snapshot.player.isAttacking;
    final botAttacking = snapshot.bot.isAttacking;
    if (botAttacking && !playerAttacking) {
      _playerPainter.draw(ctx, snapshot.player, playerPose);
      _botPainter.draw(ctx, snapshot.bot, botPose);
    } else {
      _botPainter.draw(ctx, snapshot.bot, botPose);
      _playerPainter.draw(ctx, snapshot.player, playerPose);
    }
    _particles.draw(ctx);
  }

  void _drawTitle(CanvasRenderingContext2D ctx) {
    ctx.save();
    ctx.font =
        '500 18px "Palatino Linotype", Palatino, "Times New Roman", serif';
    ctx.fillStyle = Palette.title;
    ctx.textBaseline = 'middle';
    const text = 'HOMER';
    const spacing = 12.0;
    final widths = <double>[
      for (final char in text.split(''))
        (ctx.measureText(char).width ?? 0).toDouble(),
    ];
    final total = widths.reduce((a, b) => a + b) + spacing * (text.length - 1);
    var x = 800 - total / 2;
    for (var i = 0; i < text.length; i++) {
      ctx.fillText(text[i], x, 146);
      x += widths[i] + spacing;
    }
    ctx.restore();
  }
}
