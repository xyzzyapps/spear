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
    this.shieldCenterOffset = const Vec2(0.25, 0.03),
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
    final hipY = 1.06 - pose.crouch;
    final backHip = Vec2(-0.16, hipY);
    final frontHip = Vec2(0.06, hipY);
    final shoulder = Vec2(-0.04, hipY + 0.78);
    final shieldShoulder = Vec2(0.08, hipY + 0.76);
    final headCenter = Vec2(0.06, hipY + 1.24);

    // Map pose.spearHandOffset (which stays > 0.5 in y for overhand stance)
    // into the anatomical back-arm target so the elbow bends down and back
    // and the fist drives up to the temple without crossing the shield.
    final handDx = pose.spearHandOffset.x > -0.35
        ? -0.30 + (pose.spearHandOffset.x + 0.35) * 0.52
        : pose.spearHandOffset.x + 0.05;
    final spearHandTarget =
        shoulder + Vec2(handDx, pose.spearHandOffset.y - 0.24);
    final shieldHand = shieldShoulder + pose.shieldHandOffset + shieldHandBias;
    final shieldCenter =
        shieldHand + shieldCenterOffset.rotate(pose.shieldTilt);
    // In windup (pose.spearTilt > 0), the raised hand cocks the spear so the
    // point aims slightly downward over the opposing shield rim rather than up
    // into the warrior's own crest.
    final spearAngle = 0.085 - pose.spearTilt * 0.28;
    final effectiveSlide = pose.spearSlide < 0
        ? pose.spearSlide * 0.35
        : pose.spearSlide;
    final spearArm = _solveSpearArm(shoulder, spearHandTarget, 0.38, 0.44);
    final actualSpearHand = spearArm.end;
    // Overhand grip: the palm wraps over the shaft.
    final grip = actualSpearHand + const Vec2(0, -0.015);

    final rootX = 800 + fighter.x * 100 + fighter.facing * pose.lunge * 100;
    final groundY = 673 - pose.bob * 100;

    ctx.save();
    ctx.translate(rootX, groundY);
    ctx.scale(fighter.facing * 100, -100);
    ctx.rotate(pose.rootRot);

    // Both human knees bend forward (+1).
    _drawLeg(
      ctx,
      backHip,
      pose.backFoot + Vec2(stanceBackBias, 0),
      1,
      pose.backFootRot,
    );
    _drawLeg(ctx, frontHip, pose.frontFoot, 1, pose.frontFootRot);

    ctx.save();
    _bodyTransform(ctx, hipY, pose.bodyLean, pose.torsoShift);

    // Off-hand shield arm behind torso and shield.
    _drawShieldArm(ctx, shieldShoulder, shieldHand, shieldCenter);
    // Sword scabbard hangs from the waist behind the hip.
    _drawSword(ctx, hipY);
    _drawPteruges(ctx, hipY, pose.bodyLean);
    _drawTorso(ctx, hipY, shoulder);
    // Spear shaft and tip pass behind the warrior's own helmet and shield so
    // the bot's spear sits behind its Lambda shield.
    _drawSpearShaft(ctx, grip, spearAngle, effectiveSlide);
    _drawSpearTip(ctx, grip, spearAngle, effectiveSlide, fighter.bloodyTip);
    _drawNeck(ctx, shoulder, headCenter, pose);
    _drawHead(ctx, headCenter, pose);
    _drawShield(ctx, shieldCenter, pose, fighter.wounded);
    _drawSpearArm(ctx, shoulder, spearArm.joint, actualSpearHand, spearAngle);
    ctx.restore();

    ctx.restore();
  }

  /// Solves the two-bone IK for the spear arm while keeping the elbow on the
  /// anatomical lower-posterior side so it never flips above the shoulder.
  IkResult _solveSpearArm(
    Vec2 shoulder,
    Vec2 target,
    double upperLength,
    double lowerLength,
  ) {
    final posA = solveTwoBone(shoulder, target, upperLength, lowerLength, 1);
    final posB = solveTwoBone(shoulder, target, upperLength, lowerLength, -1);
    final scoreA = posA.joint.y + 0.35 * posA.joint.x;
    final scoreB = posB.joint.y + 0.35 * posB.joint.x;
    return scoreA <= scoreB ? posA : posB;
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
    final ik = solveTwoBone(hip, foot, 0.55, 0.57, bend);
    final knee = ik.joint;
    final ankle = ik.end;

    // 1. Sculpted anatomical thigh (quadriceps curve in front, hamstring in back).
    final thighPath = _sculptedLimbPath(
      hip,
      knee,
      startFront: 0.140,
      startBack: 0.140,
      midFront: 0.148,
      midBack: 0.130,
      endFront: 0.082,
      endBack: 0.086,
    );
    _fillShadowed(ctx, thighPath, Palette.ink);

    // 2. Foot is drawn before the greave cuff so the ankle trim overlaps cleanly.
    _drawFoot(ctx, ankle, footRot);

    // 3. Contoured Greek bronze greave (knemis) with calf bulge and knee-boss.
    final shinDir = (ankle - knee).normalized;
    final shinPerp = shinDir.perp;
    final shinLen = (ankle - knee).length;

    Vec2 pt(double along, double across) =>
        knee + shinDir * (along * shinLen) + shinPerp * across;

    final kneeBossTop = pt(-0.07, 0.048);
    final shinTop = pt(0.02, 0.072);
    final shinMid = pt(0.52, 0.060);
    final ankleFront = pt(0.98, 0.050);
    final ankleBack = pt(0.98, -0.052);
    final achilles = pt(0.76, -0.058);
    final calfBulge = pt(0.34, -0.112);
    final kneeBack = pt(0.03, -0.080);

    final greavePath = Path2D();
    greavePath.moveTo(kneeBack.x, kneeBack.y);
    greavePath.quadraticCurveTo(
      knee.x + shinDir.x * -0.08,
      knee.y + shinDir.y * -0.08,
      kneeBossTop.x,
      kneeBossTop.y,
    );
    greavePath.quadraticCurveTo(
      pt(-0.02, 0.088).x,
      pt(-0.02, 0.088).y,
      shinTop.x,
      shinTop.y,
    );
    greavePath.bezierCurveTo(
      pt(0.25, 0.082).x,
      pt(0.25, 0.082).y,
      shinMid.x,
      shinMid.y,
      ankleFront.x,
      ankleFront.y,
    );
    greavePath.lineTo(ankleBack.x, ankleBack.y);
    greavePath.bezierCurveTo(
      achilles.x,
      achilles.y,
      calfBulge.x,
      calfBulge.y,
      kneeBack.x,
      kneeBack.y,
    );
    greavePath.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(greavePath);
    ctx.restore();

    final greaveGradient = ctx.createLinearGradient(
      knee.x + shinPerp.x * 0.08,
      knee.y,
      ankle.x - shinPerp.x * 0.12,
      ankle.y,
    );
    greaveGradient.addColorStop(0, Palette.greaveLight);
    greaveGradient.addColorStop(0.65, Palette.greave);
    greaveGradient.addColorStop(1, Palette.greaveDark);
    ctx.fillStyle = greaveGradient;
    ctx.fill(greavePath);

    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.014;
    ctx.stroke(greavePath);

    // Cream anatomical knee-cap loop and front shin border matching design/ref.png
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.011;
    ctx.beginPath();
    final loopStart = pt(0.08, -0.035);
    final loopTop = pt(-0.055, 0.045);
    final loopFront = pt(0.04, 0.066);
    final shinInnerBot = pt(0.95, 0.040);
    ctx.moveTo(loopStart.x, loopStart.y);
    ctx.quadraticCurveTo(
      pt(-0.03, -0.02).x,
      pt(-0.03, -0.02).y,
      loopTop.x,
      loopTop.y,
    );
    ctx.quadraticCurveTo(
      pt(-0.01, 0.072).x,
      pt(-0.01, 0.072).y,
      loopFront.x,
      loopFront.y,
    );
    ctx.lineTo(shinInnerBot.x, shinInnerBot.y);
    ctx.stroke();

    // Subtle ankle rim highlight
    ctx.beginPath();
    ctx.moveTo(ankleBack.x, ankleBack.y);
    ctx.lineTo(ankleFront.x, ankleFront.y);
    ctx.stroke();
  }

  void _drawFoot(CanvasRenderingContext2D ctx, Vec2 ankle, double rotation) {
    ctx.save();
    ctx.translate(ankle.x, ankle.y);
    ctx.rotate(rotation);
    ctx.translate(-ankle.x, -ankle.y);

    final heelX = ankle.x - 0.075;
    final toeX = ankle.x + 0.235;
    const soleY = 0.022;
    const instepY = 0.095;

    final path = Path2D();
    path.moveTo(ankle.x - 0.055, instepY);
    path.quadraticCurveTo(heelX - 0.015, 0.055, heelX, soleY);
    path.lineTo(ankle.x - 0.01, soleY);
    path.quadraticCurveTo(ankle.x + 0.04, soleY + 0.008, ankle.x + 0.10, soleY);
    path.lineTo(toeX - 0.02, soleY);
    path.quadraticCurveTo(toeX + 0.015, soleY + 0.018, toeX - 0.01, 0.050);
    path.quadraticCurveTo(ankle.x + 0.11, 0.072, ankle.x + 0.045, instepY);
    path.closePath();
    _fillShadowed(ctx, path, Palette.ink);

    ctx.restore();
  }

  void _drawSword(CanvasRenderingContext2D ctx, double hipY) {
    final a = Vec2(-0.06, hipY + 0.06);
    final b = Vec2(-0.42, hipY - 0.42);
    final d = (b - a).normalized;
    final p = d.perp;
    final path = Path2D();
    path.moveTo(a.x + p.x * 0.048, a.y + p.y * 0.048);
    path.lineTo(b.x + p.x * 0.038, b.y + p.y * 0.038);
    path.lineTo(b.x + d.x * 0.085, b.y + d.y * 0.085);
    path.lineTo(b.x - p.x * 0.038, b.y - p.y * 0.038);
    path.lineTo(a.x - p.x * 0.048, a.y - p.y * 0.048);
    path.closePath();
    _fillShadowed(ctx, path, Palette.tunic);
    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.012;
    ctx.stroke(path);

    // Cream scabbard chape binding near the tip
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.012;
    final bandCenter = b + d * -0.07;
    ctx.beginPath();
    ctx.moveTo(bandCenter.x + p.x * 0.042, bandCenter.y + p.y * 0.042);
    ctx.lineTo(bandCenter.x - p.x * 0.042, bandCenter.y - p.y * 0.042);
    ctx.stroke();

    final upperBand = a + d * 0.14;
    ctx.beginPath();
    ctx.moveTo(upperBand.x + p.x * 0.046, upperBand.y + p.y * 0.046);
    ctx.lineTo(upperBand.x - p.x * 0.046, upperBand.y - p.y * 0.046);
    ctx.stroke();
  }

  void _drawTorso(CanvasRenderingContext2D ctx, double hipY, Vec2 shoulder) {
    final path = Path2D();
    path.moveTo(-0.20, hipY + 0.02);
    path.bezierCurveTo(
      -0.23,
      hipY + 0.28,
      -0.27,
      hipY + 0.56,
      -0.18,
      hipY + 0.82,
    );
    path.quadraticCurveTo(-0.08, hipY + 0.92, 0.08, hipY + 0.90);
    path.quadraticCurveTo(0.22, hipY + 0.84, 0.24, hipY + 0.62);
    path.bezierCurveTo(0.22, hipY + 0.38, 0.19, hipY + 0.18, 0.17, hipY + 0.02);
    path.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(path);
    ctx.restore();

    final gradient = ctx.createLinearGradient(-0.20, hipY, 0.22, hipY + 0.90);
    gradient.addColorStop(0, Palette.tunicLight);
    gradient.addColorStop(0.7, Palette.tunic);
    gradient.addColorStop(1, Palette.tunicDark);
    ctx.fillStyle = gradient;
    ctx.fill(path);

    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.013;
    ctx.stroke(path);

    // Dark chest/armhole plate and cream trim matching design/ref.png
    final armhole = Path2D();
    armhole.moveTo(-0.14, hipY + 0.85);
    armhole.quadraticCurveTo(0.04, hipY + 0.91, 0.18, hipY + 0.80);
    armhole.lineTo(0.21, hipY + 0.62);
    armhole.quadraticCurveTo(0.08, hipY + 0.56, -0.04, hipY + 0.64);
    armhole.quadraticCurveTo(-0.16, hipY + 0.72, -0.14, hipY + 0.85);
    armhole.closePath();
    ctx.fillStyle = Palette.ink;
    ctx.fill(armhole);

    // Cream shoulder cutout ring
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.011;
    ctx.beginPath();
    ctx.arc(shoulder.x + 0.02, shoulder.y - 0.01, 0.095, -1.2, 2.3, false);
    ctx.stroke();

    // Anatomical cuirass waist line and front boss fastener
    _fillCircle(ctx, 0.16, hipY + 0.18, 0.028, Palette.cream, shadow: false);
    _fillCircle(ctx, 0.16, hipY + 0.18, 0.010, Palette.ink, shadow: false);

    // Segmented waist belt
    final belt = _roundedRectPath(-0.22, hipY - 0.01, 0.41, 0.075, 0.018);
    ctx.fillStyle = Palette.tunicDark;
    ctx.fill(belt);
    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.012;
    ctx.stroke(belt);

    for (var i = 0; i < 5; i++) {
      final bx = -0.16 + i * 0.075;
      ctx.beginPath();
      ctx.moveTo(bx, hipY - 0.01);
      ctx.lineTo(bx + 0.02, hipY + 0.065);
      ctx.stroke();
    }
  }

  void _drawPteruges(
    CanvasRenderingContext2D ctx,
    double hipY,
    double bodyLean,
  ) {
    ctx.save();
    // Pteruges drape across the hips and swing subtly with torso lean.
    final skirtTop = hipY + 0.01;
    final skirtBottom = hipY - 0.34;
    final sway = -bodyLean * 0.18;

    final bgPath = Path2D();
    bgPath.moveTo(-0.20, skirtTop);
    bgPath.lineTo(0.17, skirtTop);
    bgPath.lineTo(0.20 + sway, skirtBottom);
    bgPath.lineTo(-0.23 + sway, skirtBottom);
    bgPath.closePath();
    _fillShadowed(ctx, bgPath, Palette.ink);

    const count = 6;
    const totalTopWidth = 0.35;
    const totalBotWidth = 0.39;
    for (var i = 0; i < count; i++) {
      final t0 = i / count;
      final t1 = (i + 0.84) / count;
      final topX0 = -0.19 + t0 * totalTopWidth;
      final topX1 = -0.19 + t1 * totalTopWidth;
      final botX0 = -0.21 + sway + t0 * totalBotWidth;
      final botX1 = -0.21 + sway + t1 * totalBotWidth;

      final strip = Path2D();
      strip.moveTo(topX0, skirtTop);
      strip.lineTo(topX1, skirtTop);
      strip.lineTo(botX1, skirtBottom);
      strip.lineTo(botX0, skirtBottom);
      strip.closePath();
      ctx.fillStyle = i.isEven ? Palette.cream : Palette.creamDim;
      ctx.fill(strip);
    }

    ctx.strokeStyle = Palette.ink;
    ctx.lineWidth = 0.012;
    ctx.stroke(bgPath);
    ctx.restore();
  }

  void _drawNeck(
    CanvasRenderingContext2D ctx,
    Vec2 shoulder,
    Vec2 headCenter,
    PoseParams pose,
  ) {
    final headTilt = pose.headTilt;
    final nape = headCenter + const Vec2(-0.13, -0.10).rotate(headTilt);
    final throat = headCenter + const Vec2(0.07, -0.12).rotate(headTilt);
    final baseBack = Vec2(-0.09, shoulder.y + 0.10);
    final baseFront = Vec2(0.08, shoulder.y + 0.10);

    final path = Path2D();
    path.moveTo(baseBack.x, baseBack.y);
    path.quadraticCurveTo(
      (baseBack.x + nape.x) * 0.5 - 0.01,
      (baseBack.y + nape.y) * 0.5,
      nape.x,
      nape.y,
    );
    path.lineTo(throat.x, throat.y);
    path.quadraticCurveTo(
      (baseFront.x + throat.x) * 0.5 - 0.01,
      (baseFront.y + throat.y) * 0.5,
      baseFront.x,
      baseFront.y,
    );
    path.closePath();
    _fillShadowed(ctx, path, Palette.ink);

    // Subtle warm neck shading and collar line at the base of the throat
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.010;
    ctx.beginPath();
    ctx.moveTo(baseBack.x + 0.01, baseBack.y + 0.02);
    ctx.quadraticCurveTo(
      0,
      baseFront.y + 0.005,
      baseFront.x - 0.01,
      baseFront.y + 0.02,
    );
    ctx.stroke();
  }

  void _drawHead(CanvasRenderingContext2D ctx, Vec2 head, PoseParams pose) {
    ctx.save();
    ctx.translate(head.x, head.y);
    ctx.rotate(pose.headTilt);

    // 1. High-arched horsehair crest (drawn first so the helmet crown overlaps its base)
    ctx.save();
    ctx.translate(0.0, 0.24);
    ctx.rotate(pose.crestTilt);

    final crest = Path2D();
    crest.moveTo(0.16, 0.04);
    crest.bezierCurveTo(0.18, 0.24, 0.04, 0.34, -0.10, 0.32);
    crest.bezierCurveTo(-0.26, 0.30, -0.38, 0.16, -0.42, -0.08);
    crest.quadraticCurveTo(-0.28, -0.02, -0.16, 0.03);
    crest.quadraticCurveTo(-0.02, 0.06, 0.16, 0.04);
    crest.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(crest);
    ctx.restore();

    final crestGradient = ctx.createLinearGradient(-0.28, 0.28, 0.12, -0.04);
    crestGradient.addColorStop(0, crestLight);
    crestGradient.addColorStop(0.7, crestColor);
    crestGradient.addColorStop(1, crestDark);
    ctx.fillStyle = crestGradient;
    ctx.fill(crest);
    ctx.strokeStyle = crestDark;
    ctx.lineWidth = 0.011;
    ctx.stroke(crest);

    // Fine plume hair striations
    ctx.strokeStyle = crestLight;
    ctx.lineWidth = 0.009;
    for (var i = 0; i < 4; i++) {
      final t = i / 3;
      final sx = lerp(-0.04, -0.22, t);
      final sy = lerp(0.05, 0.00, t);
      final ex = lerp(0.06, -0.32, t);
      final ey = lerp(0.28, 0.16, t);
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.quadraticCurveTo((sx + ex) * 0.5, (sy + ey) * 0.5 + 0.04, ex, ey);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Authentic Corinthian Helmet silhouette matching design/ref.png
    final helmet = Path2D();
    helmet.moveTo(0.20, 0.06);
    helmet.bezierCurveTo(0.18, 0.24, 0.04, 0.31, -0.06, 0.30);
    helmet.bezierCurveTo(-0.20, 0.28, -0.24, 0.12, -0.21, -0.04);
    helmet.quadraticCurveTo(-0.20, -0.10, -0.25, -0.15);
    helmet.lineTo(-0.14, -0.16);
    helmet.quadraticCurveTo(-0.08, -0.11, -0.04, -0.15);
    helmet.lineTo(0.12, -0.18);
    helmet.lineTo(0.20, -0.12);
    helmet.quadraticCurveTo(0.14, -0.08, 0.13, -0.01);
    helmet.lineTo(0.21, -0.02);
    helmet.lineTo(0.20, 0.06);
    helmet.closePath();

    ctx.save();
    ctx.translate(0.02 * _facing, -0.03);
    ctx.fillStyle = Palette.shadow;
    ctx.fill(helmet);
    ctx.restore();

    ctx.fillStyle = Palette.ink;
    ctx.fill(helmet);

    // Cream contour lines on the Corinthian helmet matching design/ref.png
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.011;
    ctx.beginPath();
    ctx.moveTo(-0.22, -0.13);
    ctx.quadraticCurveTo(-0.18, -0.04, -0.19, 0.08);
    ctx.bezierCurveTo(-0.19, 0.24, -0.04, 0.28, 0.08, 0.25);
    ctx.quadraticCurveTo(0.17, 0.20, 0.18, 0.06);
    ctx.lineTo(0.19, -0.01);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0.18, -0.11);
    ctx.lineTo(0.11, -0.16);
    ctx.lineTo(-0.03, -0.13);
    ctx.quadraticCurveTo(-0.07, -0.06, -0.13, -0.14);
    ctx.stroke();

    // Focused almond eye inside the ocular slot
    final eye = Path2D();
    eye.moveTo(0.08, 0.025);
    eye.quadraticCurveTo(0.125, 0.050, 0.165, 0.025);
    eye.quadraticCurveTo(0.125, 0.005, 0.08, 0.025);
    eye.closePath();
    ctx.fillStyle = Palette.cream;
    ctx.fill(eye);
    _fillCircle(ctx, 0.135, 0.025, 0.012, Palette.ink, shadow: false);

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

    final buttTip = -1.46 + slide;
    final buttBase = -1.30 + slide;
    final shaftEnd = 1.12 + slide;

    // Tapered shaft path with rear sauroter point matching design/ref.png
    final shaft = Path2D();
    shaft.moveTo(buttTip, 0);
    shaft.lineTo(buttBase, 0.018);
    shaft.lineTo(shaftEnd, 0.021);
    shaft.lineTo(shaftEnd, -0.021);
    shaft.lineTo(buttBase, -0.018);
    shaft.closePath();

    _fillShadowed(ctx, shaft, Palette.ink);

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
    final socket = 1.05 + slide;
    final base = 1.11 + slide;
    final mid = 1.24 + slide;
    final tip = 1.46 + slide;

    // Socket collar
    final collar = _roundedRectPath(socket, -0.024, 0.065, 0.048, 0.010);
    ctx.fillStyle = Palette.creamDim;
    ctx.fill(collar);

    // Classic leaf-shaped dory spearhead with central rib
    final leaf = Path2D();
    leaf.moveTo(base, 0);
    leaf.quadraticCurveTo(mid, -0.082, tip, 0);
    leaf.quadraticCurveTo(mid, 0.082, base, 0);
    leaf.closePath();
    _fillShadowed(ctx, leaf, Palette.creamBright);
    ctx.strokeStyle = Palette.creamDim;
    ctx.lineWidth = 0.011;
    ctx.stroke(leaf);

    // Central spine ridge of the spearhead
    ctx.strokeStyle = Palette.creamDim;
    ctx.lineWidth = 0.010;
    ctx.beginPath();
    ctx.moveTo(base + 0.02, 0);
    ctx.lineTo(tip - 0.03, 0);
    ctx.stroke();

    if (bloody) {
      ctx.save();
      ctx.clip(leaf);
      final stain = Path2D();
      stain.moveTo(base + 0.02, -0.06);
      stain.quadraticCurveTo(mid - 0.02, -0.08, tip - 0.02, 0);
      stain.quadraticCurveTo(mid, 0.08, base + 0.02, 0.06);
      stain.closePath();
      ctx.fillStyle = Palette.bloodBright;
      ctx.fill(stain);
      ctx.fillStyle = Palette.blood;
      ctx.fillRect(base + 0.12, 0.018, 0.20, 0.025);
      ctx.restore();
    }

    ctx.restore();
  }

  void _drawShieldArm(
    CanvasRenderingContext2D ctx,
    Vec2 shoulder,
    Vec2 hand,
    Vec2 shieldCenter,
  ) {
    final ik = solveTwoBone(shoulder, hand, 0.34, 0.34, -1);
    final elbow = ik.joint;
    final end = ik.end;

    final upper = _sculptedLimbPath(
      shoulder,
      elbow,
      startFront: 0.068,
      startBack: 0.068,
      midFront: 0.072,
      midBack: 0.064,
      endFront: 0.052,
      endBack: 0.052,
    );
    _fillShadowed(ctx, upper, Palette.ink);

    final lower = _sculptedLimbPath(
      elbow,
      end,
      startFront: 0.056,
      startBack: 0.056,
      midFront: 0.060,
      midBack: 0.052,
      endFront: 0.042,
      endBack: 0.042,
    );
    _fillShadowed(ctx, lower, Palette.ink);
    _fillCircle(ctx, elbow.x, elbow.y, 0.048, Palette.ink);
  }

  void _drawSpearArm(
    CanvasRenderingContext2D ctx,
    Vec2 shoulder,
    Vec2 elbow,
    Vec2 end,
    double handAngle,
  ) {
    // Deltoid shoulder cap inside the cuirass armhole
    _fillCircle(ctx, shoulder.x, shoulder.y, 0.074, Palette.ink);

    // Sculpted upper arm (bicep and tricep contour)
    final upper = _sculptedLimbPath(
      shoulder,
      elbow,
      startFront: 0.070,
      startBack: 0.070,
      midFront: 0.078,
      midBack: 0.068,
      endFront: 0.052,
      endBack: 0.055,
    );
    _fillShadowed(ctx, upper, Palette.ink);

    // Rounded olecranon elbow joint
    _fillCircle(ctx, elbow.x, elbow.y, 0.052, Palette.ink);

    // Sculpted forearm (brachioradialis swell tapering to the wrist)
    final lower = _sculptedLimbPath(
      elbow,
      end,
      startFront: 0.058,
      startBack: 0.058,
      midFront: 0.064,
      midBack: 0.056,
      endFront: 0.042,
      endBack: 0.042,
    );
    _fillShadowed(ctx, lower, Palette.ink);

    // Cream wrist band just below the fist
    final d = (end - elbow).normalized;
    final p = d.perp;
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.011;
    ctx.beginPath();
    ctx.moveTo(
      end.x + p.x * 0.044 - d.x * 0.052,
      end.y + p.y * 0.044 - d.y * 0.052,
    );
    ctx.lineTo(
      end.x - p.x * 0.044 - d.x * 0.052,
      end.y - p.y * 0.044 - d.y * 0.052,
    );
    ctx.stroke();

    // Compact overhand dory fist wrapped around the shaft
    ctx.save();
    ctx.translate(end.x, end.y);
    ctx.rotate(handAngle);
    final fist = _roundedRectPath(-0.068, -0.052, 0.136, 0.098, 0.032);
    _fillShadowed(ctx, fist, Palette.ink);

    // Subtle curled finger divisions on the overhand grip
    ctx.strokeStyle = Palette.cream;
    ctx.lineWidth = 0.008;
    for (var i = 0; i < 3; i++) {
      final fx = -0.022 + i * 0.024;
      ctx.beginPath();
      ctx.moveTo(fx, -0.038);
      ctx.lineTo(fx + 0.004, 0.015);
      ctx.stroke();
    }
    ctx.restore();
  }

  /// Builds an organic, muscular limb contour between [a] and [b] using
  /// quadratic curves along the anterior (`+perp`) and posterior (`-perp`) edges.
  Path2D _sculptedLimbPath(
    Vec2 a,
    Vec2 b, {
    required double startFront,
    required double startBack,
    required double midFront,
    required double midBack,
    required double endFront,
    required double endBack,
  }) {
    final delta = b - a;
    final d = delta.normalized;
    final p = d.perp;
    final mid = a + delta * 0.46;

    final aFront = a + p * startFront;
    final mFront = mid + p * midFront;
    final bFront = b + p * endFront;

    final bBack = b - p * endBack;
    final mBack = mid - p * midBack;
    final aBack = a - p * startBack;

    final path = Path2D();
    path.moveTo(aFront.x, aFront.y);
    path.quadraticCurveTo(mFront.x, mFront.y, bFront.x, bFront.y);
    path.lineTo(bBack.x, bBack.y);
    path.quadraticCurveTo(mBack.x, mBack.y, aBack.x, aBack.y);
    path.closePath();
    return path;
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
