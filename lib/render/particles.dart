import 'dart:html';
import 'dart:math' as math;

import '../game/math.dart';
import '../game/rng.dart';
import 'palette.dart';

class PaperParticle {
  PaperParticle({
    required this.x,
    required this.y,
    required this.vx,
    required this.vy,
    required this.rot,
    required this.vr,
    required this.color,
    required this.size,
    this.blood = false,
  });

  double x;
  double y;
  double vx;
  double vy;
  double rot;
  double vr;
  double life = 1;
  final String color;
  final double size;
  final bool blood;
}

/// Small paper scraps that burst from impacts.
class ParticleSystem {
  final List<PaperParticle> _particles = <PaperParticle>[];
  final Rng _rng = Rng(0x51ED);

  List<PaperParticle> get particles => _particles;

  void spawnHit(double worldX, double worldY) {
    _spawn(worldX, worldY, blocked: false);
  }

  void spawnBlock(double worldX, double worldY) {
    _spawn(worldX, worldY, blocked: true);
  }

  /// A dark crimson burst from a clean hit.
  void spawnBlood(double worldX, double worldY) {
    final x = 800 + worldX * 100;
    final y = 673 - worldY * 100;
    for (var i = 0; i < 15; i++) {
      final angle = _rng.range(-math.pi, 0.45);
      final speed = _rng.range(70, 320);
      _particles.add(
        PaperParticle(
          x: x + _rng.range(-16, 16),
          y: y + _rng.range(-16, 16),
          vx: math.cos(angle) * speed,
          vy: math.sin(angle) * speed,
          rot: _rng.range(0, math.pi * 2),
          vr: _rng.range(-16, 16),
          color: switch (i % 3) {
            0 => Palette.bloodBright,
            1 => Palette.blood,
            _ => Palette.bloodDark,
          },
          size: _rng.range(4, 14),
          blood: true,
        ),
      );
    }
  }

  void _spawn(double worldX, double worldY, {required bool blocked}) {
    final x = 800 + worldX * 100;
    final y = 673 - worldY * 100;
    final count = blocked ? 6 : 9;
    for (var i = 0; i < count; i++) {
      final angle = _rng.range(-math.pi, 0.35);
      final speed = _rng.range(90, 260);
      final color = blocked
          ? Palette.creamBright
          : switch (i % 3) {
              0 => Palette.cream,
              1 => Palette.device,
              _ => Palette.ink,
            };
      _particles.add(
        PaperParticle(
          x: x + _rng.range(-12, 12),
          y: y + _rng.range(-12, 12),
          vx: math.cos(angle) * speed,
          vy: math.sin(angle) * speed,
          rot: _rng.range(0, math.pi * 2),
          vr: _rng.range(-12, 12),
          color: color,
          size: _rng.range(5, 13),
        ),
      );
    }
  }

  void update(double dt) {
    for (var i = _particles.length - 1; i >= 0; i--) {
      final p = _particles[i];
      p.life -= dt / 0.72;
      if (p.life <= 0) {
        _particles.removeAt(i);
        continue;
      }
      p.vy += 760 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
    }
  }

  void draw(CanvasRenderingContext2D ctx) {
    for (final p in _particles) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = clamp(p.life, 0, 1);
      ctx.fillStyle = p.color;
      if (p.blood) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.42, 0, math.pi * 2, false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          -p.size * 0.28,
          p.size * 0.18,
          p.size * 0.18,
          0,
          math.pi * 2,
          false,
        );
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
      }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  void clear() {
    _particles.clear();
  }
}
