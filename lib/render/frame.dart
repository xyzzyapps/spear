/// The reference composition measured from `design/ref.png`.
const double referenceWidth = 1600;
const double referenceHeight = 766;
const double groundRow = 673;
const double topBandHeight = 119;
const double bottomBandHeight = 93;

/// How the 1600x766 reference frame maps onto the viewport.
class FrameFit {
  const FrameFit({
    required this.scale,
    required this.offsetX,
    required this.offsetY,
    required this.left,
    required this.right,
  });

  final double scale;
  final double offsetX;
  final double offsetY;

  /// Visible reference-pixel x range, which can extend past 0..1600.
  final double left;
  final double right;
}

/// Fits the reference frame to the viewport.
///
/// Landscape viewports cover the height and crop or extend the sides.
/// Square and portrait viewports contain the full width and letterbox.
FrameFit fitFrame(double viewportWidth, double viewportHeight) {
  final aspect = viewportWidth / viewportHeight;
  if (aspect >= 1.0) {
    final scale = viewportHeight / referenceHeight;
    final width = referenceWidth * scale;
    final offsetX = (viewportWidth - width) / 2;
    final left = -offsetX / scale;
    final right = (viewportWidth - offsetX) / scale;
    return FrameFit(
      scale: scale,
      offsetX: offsetX,
      offsetY: 0,
      left: left,
      right: right,
    );
  }

  final scale = viewportWidth / referenceWidth;
  final height = referenceHeight * scale;
  final offsetY = (viewportHeight - height) / 2;
  return FrameFit(
    scale: scale,
    offsetX: 0,
    offsetY: offsetY,
    left: 0,
    right: referenceWidth,
  );
}
