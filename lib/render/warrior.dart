import 'dart:html';
import 'dart:math' as math;

import '../game/fighter.dart';
import '../game/math.dart';
import 'palette.dart';
import 'pose.dart';

enum ShieldDevice { rosette, lambda }

/// Draws one papercut hoplite in the reference frame.
class WarriorPainter {
  WarriorPainter({
    required this.shieldRadius,
    required this.device,
    required this.crestColor,
    required this.crestLight,
    required this.crestDark,
    this.shieldHandBias = Vec2.zero,
    this.shieldCenterOffset = const Vec2(0.25, 0.08),
    this.stanceBackBias = 0,
  });

  final double shieldRadius;
  final ShieldDevice device;
  final String crestColor;
  final String crestLight;
  final String crestDark;
  final Vec2 shieldHandBias;
  final Vec2 shieldCenterOffset;
  final double stanceBackBias;

  int _facing = 1;

  void draw(CanvasRenderingContext2D ctx, Fighter fighter, PoseParams pose) {
    _facing = fighter.facing;
    final hipY = 1.15 - pose.crouch;
    final backHip = Vec2(-0.18, hipY);
    final frontHip = Vec2(0.02, hipY);
    final shoulder = Vec2(0, hipY + 0.87);
    final headCenter = Vec2(0.08, hipY + 1.57);
    final spearHand = shoulder + pose.spearHandOffset;
    final shieldHand = shoulder + pose.shieldHandOffset + shieldHandBias;
    final shieldCenter =
        shieldHand + shieldCenterOffset.rotate(pose.shieldTilt);
    final spearAngle = 0.095 + pose.spearTilt;
    final spearArm = solveTwoBone(shoulder, spearHand, 0.34, 0.44, -1);
    final actualSpearHand = spearArm.end;
    // Overhand grip: the palm sits over the shaft, not under it.
    final grip = actualSpearHand + const Vec2(0, -0.02);

    final rootX = 800 + fighter.x * 100 + fighter.facing * pose.lunge * 100;
    final groundY = 673 - pose.bob * 100;

    ctx.save();
    ctx.translate(rootX, groundY);
    ctx.scale(fighter.facing * 100, -100);
    ctx.rotate(pose.rootRot);

    _drawLeg(
      ctx,
      backHip,
      pose.backFoot + Vec2(stanceBackBias, 0),
      -1,
      pose.backFootRot,
    );
    _drawLeg(ctx, frontHip, pose.frontFoot, 1, pose.frontFootRot);

    ctx.save();
    _bodyTransform(ctx, hipY, pose.bodyLean, pose.torsoShift);

    // Off-hand shield arm, mostly hidden behind the shield and torso.
    _drawArm(ctx, shoulder, shieldHand, 0.34, 0.34, -1);
    _drawTorso(ctx, hipY);
    _drawPteruges(ctx, hipY);
    _drawSword(ctx, hipY);
    _drawNeck(ctx, hipY);
    _drawHead(ctx, headCenter, pose);
    _drawSpearShaft(ctx, grip, spearAngle, pose.spearSlide);
    _drawShield(ctx, shieldCenter, pose, fighter.wounded);
    _drawArm(
      ctx,
      shoulder,
      actualSpearHand,
      0.34,
      0.44,
      -1,
      handAngle: spearAngle,
      grip: true,
    );
    _drawSpearTip(ctx, grip, spearAngle, pose.spearSlide, fighter.bloodyTip);
    ctx.restore();

    ctx.restore();
  }

  void _bodyTransform(
    CanvasRenderingContext2D ctx,
    double hipY,
    double lean,
    double shift,
  ) {
    ctx.translate(0, hipY);
    ctx.rotate(lean);
    ctx.translate(0, -hipY);
    ctx.translate(shift, 0);
  }

  void _drawLeg(
    CanvasRenderingContext2D ctx,
    Vec2 hip,
    Vec2 foot,
    double bend,
    double footRot,
  ) {
    final ik = solveTwoBone(hip, foot, 0.60, 0.64, bend);
    final knee = ik.joint;
    final ankle = ik.end;

    _drawLimb(ctx, hip, knee, 0.16, 0.12, Palette.ink);

    final greavePath = _limbPath(knee, ankle, 0.11, 0.075);
    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(greavePath);
    ctx.restore();
    final greaveGradient = ctx.createLinearGradient(
      knee.x,
      knee.y,
      ankle.x,
      ankle.y,
    );
    greaveGradient.addColorStop(0, Palette.greaveLight);
    greaveGradient.addColorStop(1, Palette.greave);
    ctx.fillStyle = greaveGradient;
    ctx.fill(greavePath);

    final d = (ankle - knee).normalized;
    final p = d.perp;
    ctx.strokeStyle = 'rgba(232, 170, 130, 0.26)';
    ctx.lineWidth = 0.02;
    ctx.beginPath();
    ctx.moveTo(knee.x + p.x * 0.05, knee.y + p.y * 0.05);
    ctx.lineTo(ankle.x + p.x * 0.032, ankle.y + p.y * 0.032);
    ctx.stroke();
    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.014;
    ctx.beginPath();
    ctx.moveTo(knee.x + p.x * 0.11, knee.y + p.y * 0.11);
    ctx.lineTo(ankle.x + p.x * 0.075, ankle.y + p.y * 0.075);
    ctx.lineTo(ankle.x - p.x * 0.075, ankle.y - p.y * 0.075);
    ctx.lineTo(knee.x - p.x * 0.11, knee.y - p.y * 0.11);
    ctx.closePath();
    ctx.stroke();

    _fillCircle(ctx, knee.x, knee.y, 0.11, Palette.ink);
    _drawCrossBand(ctx, knee, ankle, 0.07, 0.11, Palette.cream, 0.016);
    _drawCrossBand(ctx, ankle, knee, 0.025, 0.075, Palette.cream, 0.012);
    _drawFoot(ctx, ankle, footRot);
  }

  void _drawFoot(CanvasRenderingContext2D ctx, Vec2 ankle, double rotation) {
    ctx.save();
    ctx.translate(ankle.x, ankle.y);
    ctx.rotate(rotation);
    ctx.translate(-ankle.x, -ankle.y);

    final path = Path2D();
    path.moveTo(ankle.x - 0.06, 0.10);
    path.lineTo(ankle.x + 0.19, 0.10);
    path.quadraticCurveTo(ankle.x + 0.27, 0.10, ankle.x + 0.26, 0.04);
    path.lineTo(ankle.x - 0.06, 0.04);
    path.closePath();
    _fillShadowed(ctx, path, Palette.ink);

    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.012;
    ctx.beginPath();
    ctx.moveTo(ankle.x - 0.035, 0.105);
    ctx.lineTo(ankle.x + 0.035, 0.105);
    ctx.stroke();

    ctx.restore();
  }

  void _drawSword(CanvasRenderingContext2D ctx, double hipY) {
    final a = Vec2(-0.12, hipY + 0.08);
    final b = Vec2(-0.48, hipY - 0.50);
    final d = (b - a).normalized;
    final p = d.perp;
    final path = Path2D();
    path.moveTo(a.x + p.x * 0.06, a.y + p.y * 0.06);
    path.lineTo(b.x + p.x * 0.05, b.y + p.y * 0.05);
    path.lineTo(b.x + d.x * 0.10, b.y + d.y * 0.10);
    path.lineTo(b.x - p.x * 0.05, b.y - p.y * 0.05);
    path.lineTo(a.x - p.x * 0.06, a.y - p.y * 0.06);
    path.closePath();
    _fillShadowed(ctx, path, Palette.tunicDark);

    _fillCircle(ctx, a.x, a.y, 0.055, Palette.ink);
    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.03;
    ctx.beginPath();
    ctx.moveTo(a.x - p.x * 0.10, a.y - p.y * 0.10);
    ctx.lineTo(a.x + p.x * 0.10, a.y + p.y * 0.10);
    ctx.stroke();

    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.012;
    final bandCenter = b + d * -0.10;
    ctx.beginPath();
    ctx.moveTo(bandCenter.x + p.x * 0.055, bandCenter.y + p.y * 0.055);
    ctx.lineTo(bandCenter.x - p.x * 0.055, bandCenter.y - p.y * 0.055);
    ctx.stroke();
  }

  void _drawTorso(CanvasRenderingContext2D ctx, double hipY) {
    final path = Path2D();
    path.moveTo(-0.23, hipY);
    path.lineTo(-0.28, hipY + 0.55);
    path.quadraticCurveTo(-0.26, hipY + 0.80, -0.11, hipY + 0.88);
    path.lineTo(0.10, hipY + 0.90);
    path.quadraticCurveTo(0.25, hipY + 0.86, 0.27, hipY + 0.66);
    path.lineTo(0.22, hipY + 0.10);
    path.lineTo(0.14, hipY);
    path.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(path);
    ctx.restore();

    final gradient = ctx.createLinearGradient(0, hipY, 0, hipY + 0.90);
    gradient.addColorStop(0, Palette.tunicLight);
    gradient.addColorStop(1, Palette.tunic);
    ctx.fillStyle = gradient;
    ctx.fill(path);

    final chest = Path2D();
    chest.moveTo(-0.13, hipY + 0.90);
    chest.quadraticCurveTo(0.06, hipY + 0.94, 0.23, hipY + 0.84);
    chest.lineTo(0.25, hipY + 0.66);
    chest.quadraticCurveTo(0.13, hipY + 0.58, 0.06, hipY + 0.62);
    chest.lineTo(-0.02, hipY + 0.80);
    chest.closePath();
    ctx.fillStyle = Palette.ink;
    ctx.fill(chest);

    final belt = _roundedRectPath(-0.27, hipY + 0.02, 0.54, 0.08, 0.02);
    ctx.fillStyle = Palette.tunicDark;
    ctx.fill(belt);
    _fillCircle(ctx, 0.24, hipY + 0.10, 0.035, Palette.cream, shadow: false);
  }

  void _drawPteruges(CanvasRenderingContext2D ctx, double hipY) {
    for (var i = 0; i < 7; i++) {
      final x = -0.36 + i * 0.112;
      final path = _roundedRectPath(x, hipY - 0.40, 0.085, 0.44, 0.012);
      _fillShadowed(ctx, path, Palette.cream);
    }
  }

  void _drawNeck(CanvasRenderingContext2D ctx, double hipY) {
    final path = Path2D();
    path.moveTo(-0.10, hipY + 0.84);
    path.lineTo(0.10, hipY + 0.84);
    path.lineTo(0.075, hipY + 1.34);
    path.lineTo(-0.075, hipY + 1.34);
    path.closePath();
    _fillShadowed(ctx, path, Palette.neck);

    final highlight = Path2D();
    highlight.moveTo(0.015, hipY + 0.90);
    highlight.lineTo(0.065, hipY + 0.90);
    highlight.lineTo(0.050, hipY + 1.31);
    highlight.lineTo(0.010, hipY + 1.31);
    highlight.closePath();
    ctx.fillStyle = Palette.neckLight;
    ctx.fill(highlight);

    final collar = _roundedRectPath(-0.13, hipY + 0.86, 0.26, 0.09, 0.02);
    ctx.fillStyle = Palette.ink;
    ctx.fill(collar);
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.012;
    ctx.beginPath();
    ctx.moveTo(-0.11, hipY + 0.955);
    ctx.lineTo(0.11, hipY + 0.955);
    ctx.stroke();
  }

  void _drawHead(CanvasRenderingContext2D ctx, Vec2 head, PoseParams pose) {
    ctx.save();
    ctx.translate(head.x, head.y);
    ctx.rotate(pose.headTilt);

    final helmet = Path2D();
    helmet.moveTo(-0.24, -0.10);
    helmet.bezierCurveTo(-0.32, 0.10, -0.22, 0.32, 0.02, 0.32);
    helmet.bezierCurveTo(0.20, 0.32, 0.28, 0.18, 0.26, 0.06);
    helmet.lineTo(0.22, -0.02);
    helmet.lineTo(0.26, -0.14);
    helmet.lineTo(0.18, -0.16);
    helmet.lineTo(0.13, -0.24);
    helmet.lineTo(-0.02, -0.26);
    helmet.lineTo(-0.18, -0.19);
    helmet.closePath();
    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(helmet);
    ctx.restore();
    ctx.fillStyle = Palette.ink;
    ctx.fill(helmet);

    ctx.save();
    ctx.clip(helmet);
    final helmetGradient = ctx.createRadialGradient(
      -0.08,
      0.10,
      0.02,
      -0.02,
      0.02,
      0.42,
    );
    helmetGradient.addColorStop(0, 'rgba(96, 48, 34, 0.40)');
    helmetGradient.addColorStop(1, 'rgba(18, 8, 6, 0)');
    ctx.fillStyle = helmetGradient;
    ctx.fillRect(-0.45, -0.4, 0.9, 0.85);
    ctx.restore();

    final eye = Path2D();
    eye.moveTo(0.06, 0.03);
    eye.quadraticCurveTo(0.12, 0.06, 0.19, 0.03);
    eye.quadraticCurveTo(0.12, 0.005, 0.06, 0.03);
    eye.closePath();
    ctx.fillStyle = Palette.cream;
    ctx.fill(eye);
    _fillCircle(ctx, 0.14, 0.03, 0.016, Palette.ink, shadow: false);

    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.014;
    ctx.beginPath();
    ctx.moveTo(0.255, 0.08);
    ctx.lineTo(0.275, -0.12);
    ctx.stroke();

    ctx.lineWidth = 0.012;
    ctx.beginPath();
    ctx.moveTo(0.20, -0.10);
    ctx.quadraticCurveTo(0.15, -0.17, 0.09, -0.22);
    ctx.stroke();

    ctx.fillStyle = Palette.ink;
    ctx.fillRect(-0.012, 0.30, 0.024, 0.10);

    ctx.save();
    ctx.translate(0, 0.30);
    ctx.rotate(pose.crestTilt);
    final crest = Path2D();
    crest.moveTo(0.38, 0.00);
    crest.bezierCurveTo(0.34, 0.12, 0.22, 0.22, 0.08, 0.22);
    crest.bezierCurveTo(-0.10, 0.22, -0.30, 0.02, -0.44, -0.15);
    crest.bezierCurveTo(-0.28, -0.08, -0.08, -0.02, 0.12, 0.00);
    crest.bezierCurveTo(0.22, 0.02, 0.32, 0.02, 0.38, 0.00);
    crest.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(crest);
    ctx.restore();

    final crestGradient = ctx.createLinearGradient(-0.26, 0.18, 0.12, -0.08);
    crestGradient.addColorStop(0, crestLight);
    crestGradient.addColorStop(1, crestColor);
    ctx.fillStyle = crestGradient;
    ctx.fill(crest);
    ctx.strokeStyle = crestDark;
    ctx.lineWidth = 0.012;
    ctx.stroke(crest);

    ctx.strokeStyle = crestLight;
    ctx.lineWidth = 0.014;
    ctx.beginPath();
    ctx.moveTo(0.36, 0.02);
    ctx.bezierCurveTo(0.32, 0.12, 0.21, 0.20, 0.08, 0.20);
    ctx.bezierCurveTo(-0.09, 0.20, -0.28, 0.00, -0.41, -0.13);
    ctx.stroke();

    ctx.restore();
    ctx.restore();
  }

  void _drawShield(
    CanvasRenderingContext2D ctx,
    Vec2 center,
    PoseParams pose,
    bool wounded,
  ) {
    final r = shieldRadius;
    ctx.save();
    ctx.translate(center.x, center.y);
    ctx.rotate(pose.shieldTilt);

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadowStrong;
    ctx.fill(_circlePath(0, 0, r));
    ctx.restore();

    ctx.fillStyle = Palette.ink;
    ctx.fill(_circlePath(0, 0, r));
    final fieldGradient = ctx.createRadialGradient(
      -0.16 * r,
      -0.16 * r,
      0.05 * r,
      0,
      0,
      r * 1.1,
    );
    fieldGradient.addColorStop(0, Palette.shieldFieldLight);
    fieldGradient.addColorStop(0.65, Palette.shieldField);
    fieldGradient.addColorStop(1, '#1d0d09');
    ctx.fillStyle = fieldGradient;
    ctx.fill(_circlePath(0, 0, r * 0.84));

    ctx.strokeStyle = '#3a1a12';
    ctx.lineWidth = 0.014;
    ctx.stroke(_circlePath(0, 0, r * 0.88));

    for (var i = 0; i < 18; i++) {
      final angle = (i / 18) * math.pi * 2 + 0.06;
      final x = math.cos(angle) * r * 0.82;
      final y = math.sin(angle) * r * 0.82;
      ctx.fillStyle = Palette.cream;
      ctx.fill(_circlePath(x, y, r * 0.028));
    }

    if (device == ShieldDevice.rosette) {
      for (var i = 0; i < 8; i++) {
        ctx.save();
        ctx.rotate((i / 8) * math.pi * 2);
        final petal = Path2D();
        petal.moveTo(0, 0);
        petal.bezierCurveTo(
          0.14 * r,
          0.09 * r,
          0.48 * r,
          0.22 * r,
          0.60 * r,
          0,
        );
        petal.bezierCurveTo(0.48 * r, -0.22 * r, 0.14 * r, -0.09 * r, 0, 0);
        petal.closePath();
        ctx.fillStyle = Palette.device;
        ctx.fill(petal);
        ctx.restore();
      }
      ctx.fillStyle = Palette.cream;
      ctx.fill(_circlePath(0, 0, r * 0.13));
    } else {
      final lambda = Path2D();
      lambda.moveTo(0, 0.60 * r);
      lambda.lineTo(-0.52 * r, -0.50 * r);
      lambda.lineTo(-0.34 * r, -0.50 * r);
      lambda.lineTo(0, 0.02 * r);
      lambda.lineTo(0.34 * r, -0.50 * r);
      lambda.lineTo(0.52 * r, -0.50 * r);
      lambda.closePath();
      ctx.fillStyle = Palette.device;
      ctx.fill(lambda);
    }

    ctx.strokeStyle = 'rgba(240, 224, 199, 0.08)';
    ctx.lineWidth = r * 0.10;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, math.pi * 0.86, math.pi * 1.54);
    ctx.stroke();

    if (wounded) {
      _drawShieldBlood(ctx, r);
    }

    ctx.restore();
  }

  void _drawShieldBlood(CanvasRenderingContext2D ctx, double r) {
    ctx.save();
    ctx.clip(_circlePath(0, 0, r * 0.84));

    final splat = Path2D();
    splat.moveTo(-0.54 * r, 0.12 * r);
    splat.bezierCurveTo(
      -0.64 * r,
      0.28 * r,
      -0.42 * r,
      0.44 * r,
      -0.31 * r,
      0.34 * r,
    );
    splat.bezierCurveTo(
      -0.19 * r,
      0.47 * r,
      -0.02 * r,
      0.30 * r,
      -0.13 * r,
      0.19 * r,
    );
    splat.bezierCurveTo(
      -0.25 * r,
      0.07 * r,
      -0.44 * r,
      0.03 * r,
      -0.54 * r,
      0.12 * r,
    );
    splat.closePath();
    ctx.fillStyle = Palette.bloodBright;
    ctx.fill(splat);

    ctx.fillStyle = Palette.blood;
    ctx.fill(_circlePath(-0.10 * r, 0.49 * r, 0.052 * r));
    ctx.fill(_circlePath(0.20 * r, 0.26 * r, 0.042 * r));
    ctx.fill(_circlePath(-0.58 * r, -0.10 * r, 0.036 * r));

    ctx.fillStyle = Palette.bloodDark;
    final drip = _roundedRectPath(
      -0.37 * r,
      0.30 * r,
      0.045 * r,
      0.34 * r,
      0.020 * r,
    );
    ctx.fill(drip);

    ctx.restore();
  }

  void _drawSpearShaft(
    CanvasRenderingContext2D ctx,
    Vec2 grip,
    double angle,
    double slide,
  ) {
    ctx.save();
    ctx.translate(grip.x, grip.y);
    ctx.rotate(angle);

    final butt = -1.47 + slide;
    final shaftEnd = 1.15 + slide;

    ctx.strokeStyle = Palette.shadow;
    ctx.lineWidth = 0.05;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(butt + 0.02 * _facing, -0.02);
    ctx.lineTo(shaftEnd + 0.02 * _facing, -0.02);
    ctx.stroke();

    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.045;
    ctx.beginPath();
    ctx.moveTo(butt, 0);
    ctx.lineTo(shaftEnd, 0);
    ctx.stroke();

    // The grip stays under the fist while the shaft slides through it.
    ctx.fillStyle = Palette.cream;
    ctx.fillRect(-0.055, -0.045, 0.11, 0.09);

    ctx.restore();
  }

  void _drawSpearTip(
    CanvasRenderingContext2D ctx,
    Vec2 grip,
    double angle,
    double slide,
    bool bloody,
  ) {
    ctx.save();
    ctx.translate(grip.x, grip.y);
    ctx.rotate(angle);
    final base = 1.13 + slide;
    final mid = 1.30 + slide;
    final tip = 1.50 + slide;
    final leaf = Path2D();
    leaf.moveTo(base, -0.055);
    leaf.quadraticCurveTo(mid, -0.10, tip, 0);
    leaf.quadraticCurveTo(mid, 0.10, base, 0.055);
    leaf.closePath();
    _fillShadowed(ctx, leaf, Palette.creamBright);
    ctx.strokeStyle = Palette.creamDim;
    ctx.lineWidth = 0.012;
    ctx.stroke(leaf);

    if (bloody) {
      ctx.save();
      ctx.clip(leaf);
      final stain = Path2D();
      stain.moveTo(base + 0.02, -0.06);
      stain.quadraticCurveTo(mid - 0.02, -0.08, tip - 0.04, 0);
      stain.quadraticCurveTo(mid, 0.09, base + 0.02, 0.06);
      stain.closePath();
      ctx.fillStyle = Palette.bloodBright;
      ctx.fill(stain);
      ctx.fillStyle = Palette.blood;
      ctx.fillRect(base + 0.14, 0.025, 0.22, 0.028);
      ctx.restore();
    }

    ctx.restore();
  }

  void _drawArm(
    CanvasRenderingContext2D ctx,
    Vec2 shoulder,
    Vec2 hand,
    double upperLength,
    double lowerLength,
    double bend, {
    double? handAngle,
    bool grip = false,
  }) {
    final ik = solveTwoBone(shoulder, hand, upperLength, lowerLength, bend);
    final elbow = ik.joint;
    final end = ik.end;

    _fillCircle(ctx, shoulder.x, shoulder.y, 0.09, Palette.ink);
    _drawLimb(ctx, shoulder, elbow, 0.072, 0.062, Palette.ink);
    _drawLimb(ctx, elbow, end, 0.062, 0.052, Palette.ink);
    _fillCircle(ctx, elbow.x, elbow.y, 0.052, Palette.ink);
    _fillCircle(ctx, end.x, end.y, 0.060, Palette.ink);

    if (grip && handAngle != null) {
      ctx.save();
      ctx.translate(end.x, end.y);
      ctx.rotate(handAngle);
      final palm = _roundedRectPath(-0.075, -0.065, 0.15, 0.13, 0.04);
      _fillShadowed(ctx, palm, Palette.ink);
      final fist = _roundedRectPath(-0.10, -0.075, 0.20, 0.15, 0.05);
      _fillShadowed(ctx, fist, Palette.ink);

      ctx.strokeStyle = Palette.inkSoft;
      ctx.lineWidth = 0.012;
      for (var i = 0; i < 3; i++) {
        final x = 0.015 + i * 0.025;
        ctx.beginPath();
        ctx.moveTo(x, -0.058);
        ctx.lineTo(x + 0.008, 0.050);
        ctx.stroke();
      }

      final thumb = _roundedRectPath(-0.088, 0.030, 0.080, 0.042, 0.018);
      ctx.fillStyle = Palette.inkSoft;
      ctx.fill(thumb);
      ctx.restore();
    } else {
      _fillCircle(ctx, end.x, end.y, 0.072, Palette.ink);
    }

    final d = (end - elbow).normalized;
    final p = d.perp;
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.012;
    ctx.beginPath();
    ctx.moveTo(
      end.x + p.x * 0.055 - d.x * 0.045,
      end.y + p.y * 0.055 - d.y * 0.045,
    );
    ctx.lineTo(
      end.x - p.x * 0.055 - d.x * 0.045,
      end.y - p.y * 0.055 - d.y * 0.045,
    );
    ctx.stroke();
  }

  void _drawLimb(
    CanvasRenderingContext2D ctx,
    Vec2 a,
    Vec2 b,
    double halfWidthA,
    double halfWidthB,
    String color,
  ) {
    final path = _limbPath(a, b, halfWidthA, halfWidthB);
    _fillShadowed(ctx, path, color);
  }

  Path2D _limbPath(Vec2 a, Vec2 b, double halfWidthA, double halfWidthB) {
    final d = (b - a).normalized;
    final p = d.perp;
    final path = Path2D();
    path.moveTo(a.x + p.x * halfWidthA, a.y + p.y * halfWidthA);
    path.lineTo(b.x + p.x * halfWidthB, b.y + p.y * halfWidthB);
    path.lineTo(b.x - p.x * halfWidthB, b.y - p.y * halfWidthB);
    path.lineTo(a.x - p.x * halfWidthA, a.y - p.y * halfWidthA);
    path.closePath();
    return path;
  }

  void _drawCrossBand(
    CanvasRenderingContext2D ctx,
    Vec2 a,
    Vec2 b,
    double distance,
    double halfWidth,
    String color,
    double lineWidth,
  ) {
    final d = (b - a).normalized;
    final p = d.perp;
    final center = a + d * distance;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(center.x + p.x * halfWidth, center.y + p.y * halfWidth);
    ctx.lineTo(center.x - p.x * halfWidth, center.y - p.y * halfWidth);
    ctx.stroke();
  }

  void _fillShadowed(
    CanvasRenderingContext2D ctx,
    Path2D path,
    String color, {
    double dx = 0.02,
    double dy = -0.03,
  }) {
    ctx.save();
    ctx.translate(dx * _facing, dy);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(path);
    ctx.restore();
    ctx.fillStyle = color;
    ctx.fill(path);
  }

  void _fillCircle(
    CanvasRenderingContext2D ctx,
    double x,
    double y,
    double radius,
    String color, {
    bool shadow = true,
  }) {
    final path = _circlePath(x, y, radius);
    if (shadow) {
      ctx.save();
      ctx.translate(0.02 * _facing, -0.03);
      ctx.fillStyle = Palette.shadow;
      ctx.fill(path);
      ctx.restore();
    }
    ctx.fillStyle = color;
    ctx.fill(path);
  }

  Path2D _circlePath(double x, double y, double radius) {
    final path = Path2D();
    path.arc(x, y, radius, 0, math.pi * 2, false);
    return path;
  }

  Path2D _roundedRectPath(
    double x,
    double y,
    double width,
    double height,
    double radius,
  ) {
    final path = Path2D();
    final r = math.min(radius, math.min(width / 2, height / 2));
    path.moveTo(x + r, y);
    path.lineTo(x + width - r, y);
    path.quadraticCurveTo(x + width, y, x + width, y + r);
    path.lineTo(x + width, y + height - r);
    path.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    path.lineTo(x + r, y + height);
    path.quadraticCurveTo(x, y + height, x, y + height - r);
    path.lineTo(x, y + r);
    path.quadraticCurveTo(x, y, x + r, y);
    path.closePath();
    return path;
  }
}
