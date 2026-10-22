// ignore_for_file: avoid_print

import 'dart:io';
import 'dart:typed_data';

final List<String> _failures = <String>[];

void _check(bool condition, String message) {
  if (condition) {
    print('ok   $message');
  } else {
    _failures.add(message);
    print('FAIL $message');
  }
}

Future<void> main() async {
  print('Homer distribution check');
  print('');

  final index = File('index.html');
  final app = File('app.js');
  final preview = File('preview.png');
  final nojekyll = File('.nojekyll');
  final reference = File('design/ref.png');

  _check(await index.exists(), 'index.html exists');
  _check(await app.exists(), 'app.js exists');
  _check(await nojekyll.exists(), '.nojekyll exists');
  _check(await reference.exists(), 'design/ref.png exists');

  if (await index.exists()) {
    final html = await index.readAsString();
    _check(
      html.contains('name="twitter:card" content="player"'),
      'twitter:card is player',
    );
    _check(html.contains('name="twitter:player"'), 'twitter:player is present');
    _check(
      html.contains('name="twitter:player:width" content="480"'),
      'player width is 480',
    );
    _check(
      html.contains('name="twitter:player:height" content="270"'),
      'player height is 270',
    );
    _check(html.contains('name="twitter:image"'), 'twitter:image is present');
    _check(html.contains('property="og:title"'), 'og:title is present');
    _check(html.contains('property="og:image"'), 'og:image is present');
    _check(html.contains('src="app.js"'), 'index loads local app.js');
    _check(
      !RegExp(r'''(?:src|href)\s*=\s*["']https?://''').hasMatch(html),
      'no external src or href',
    );
  }

  if (await app.exists()) {
    final size = await app.length();
    _check(size > 10000, 'app.js is a compiled build ($size bytes)');
  }

  if (await preview.exists()) {
    final dimensions = await _pngDimensions(preview);
    _check(dimensions != null, 'preview.png has a valid PNG header');
    if (dimensions != null) {
      _check(
        dimensions.$1 == 1200 && dimensions.$2 == 628,
        'preview.png is 1200x628 (got ${dimensions.$1}x${dimensions.$2})',
      );
    }
  } else {
    _failures.add('preview.png exists');
    print('FAIL preview.png exists');
  }

  print('');
  if (_failures.isEmpty) {
    print('All checks passed.');
    return;
  }
  print('${_failures.length} check(s) failed.');
  exit(1);
}

Future<(int, int)?> _pngDimensions(File file) async {
  final bytes = await file
      .openRead(0, 24)
      .fold<Uint8List>(
        Uint8List(0),
        (previous, chunk) => Uint8List.fromList([...previous, ...chunk]),
      );
  if (bytes.length < 24) return null;
  if (bytes[0] != 0x89 ||
      bytes[1] != 0x50 ||
      bytes[2] != 0x4E ||
      bytes[3] != 0x47) {
    return null;
  }
  final width =
      (bytes[16] << 24) | (bytes[17] << 16) | (bytes[18] << 8) | bytes[19];
  final height =
      (bytes[20] << 24) | (bytes[21] << 16) | (bytes[22] << 8) | bytes[23];
  return (width, height);
}
