import 'dart:html';

import 'frame.dart';
import 'palette.dart';

/// Procedural top and bottom friezes measured from the reference art.
class BandTextures {
  BandTextures() {
    _top = _buildTopBand();
    _bottom = _buildBottomBand();
  }

  late final CanvasElement _top;
  late final CanvasElement _bottom;
  CanvasPattern? _topPattern;
  CanvasPattern? _bottomPattern;

  void prepare(CanvasRenderingContext2D ctx) {
    _topPattern ??= ctx.createPattern(_top, 'repeat');
    _bottomPattern ??= ctx.createPattern(_bottom, 'repeat');
  }

  void draw(CanvasRenderingContext2D ctx, FrameFit fit) {
    prepare(ctx);
    final top = _topPattern;
    final bottom = _bottomPattern;
    if (top == null || bottom == null) return;
    final width = fit.right - fit.left;

    ctx.save();
    ctx.fillStyle = top;
    ctx.fillRect(fit.left, 0, width, topBandHeight);
    ctx.fillStyle = bottom;
    ctx.fillRect(fit.left, groundRow, width, bottomBandHeight);
    ctx.restore();
  }

  static CanvasElement _buildTopBand() {
    final canvas = CanvasElement(width: 1600, height: 119);
    final ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = Palette.bandInk;

    ctx.fillRect(0, 0, 1600, 9);
    ctx.fillRect(0, 11, 1600, 6);
    _drawMeander(ctx, 19, 12, 32, 2.0);
    ctx.fillRect(0, 33, 1600, 5);
    ctx.fillRect(0, 41, 1600, 11);
    ctx.fillRect(0, 70, 1600, 4);
    _drawMeander(ctx, 80, 29, 40, 3.8);
    ctx.fillRect(0, 115, 1600, 4);

    return canvas;
  }

  static CanvasElement _buildBottomBand() {
    final canvas = CanvasElement(width: 1600, height: 93);
    final ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = Palette.bandInk;

    ctx.fillRect(0, 0, 1600, 4);

    const pitch = 32.0;
    const dropWidth = 18.0;
    const top = 7.0;
    const bottom = 41.0;
    for (var x = -pitch; x < 1600 + pitch; x += pitch) {
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x + dropWidth, top);
      ctx.bezierCurveTo(
        x + dropWidth,
        top + 18,
        x + dropWidth * 0.78,
        bottom,
        x + dropWidth * 0.5,
        bottom,
      );
      ctx.bezierCurveTo(x + dropWidth * 0.22, bottom, x, top + 18, x, top);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillRect(0, 47, 1600, 4);
    ctx.fillRect(0, 66, 1600, 4);
    ctx.fillRect(0, 72, 1600, 21);

    return canvas;
  }

  static void _drawMeander(
    CanvasRenderingContext2D ctx,
    double y,
    double height,
    double pitch,
    double lineWidth,
  ) {
    ctx.save();
    ctx.strokeStyle = Palette.bandInk;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';
    for (var x = -pitch; x < 1600 + pitch; x += pitch) {
      ctx.beginPath();
      ctx.moveTo(x, y + height);
      ctx.lineTo(x + pitch * 0.82, y + height);
      ctx.lineTo(x + pitch * 0.82, y + height * 0.12);
      ctx.lineTo(x + pitch * 0.30, y + height * 0.12);
      ctx.lineTo(x + pitch * 0.30, y + height * 0.56);
      ctx.lineTo(x + pitch * 0.56, y + height * 0.56);
      ctx.lineTo(x + pitch * 0.56, y + height * 0.34);
      ctx.lineTo(x + pitch * 0.44, y + height * 0.34);
      ctx.stroke();
    }
    ctx.restore();
  }
}
