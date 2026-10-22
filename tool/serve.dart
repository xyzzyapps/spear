// ignore_for_file: avoid_print

import 'dart:io';

const int _port = 4173;

Future<void> main() async {
  final root = Directory.current;
  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, _port);
  print('Homer serving ${root.path}');
  print('http://127.0.0.1:$_port/');

  await for (final request in server) {
    await _handle(request, root);
  }
}

Future<void> _handle(HttpRequest request, Directory root) async {
  final response = request.response;
  try {
    var path = request.uri.path;
    if (path == '/' || path.isEmpty) {
      path = '/index.html';
    }
    if (path.contains('..')) {
      response.statusCode = HttpStatus.forbidden;
      response.write('Forbidden');
      await response.close();
      return;
    }

    final relative = path.startsWith('/') ? path.substring(1) : path;
    final file = File('${root.path}${Platform.pathSeparator}$relative');
    if (!await file.exists()) {
      response.statusCode = HttpStatus.notFound;
      response.write('Not found');
      await response.close();
      return;
    }

    response.headers.contentType = _contentType(file.path);
    response.headers.set('Cache-Control', 'no-store');
    await file.openRead().pipe(response);
  } catch (error) {
    response.statusCode = HttpStatus.internalServerError;
    response.write('Server error: $error');
    await response.close();
  }
}

ContentType _contentType(String path) {
  final lower = path.toLowerCase();
  if (lower.endsWith('.html')) return ContentType.html;
  if (lower.endsWith('.js')) {
    return ContentType('text', 'javascript', charset: 'utf-8');
  }
  if (lower.endsWith('.css'))
    return ContentType('text', 'css', charset: 'utf-8');
  if (lower.endsWith('.json')) return ContentType.json;
  if (lower.endsWith('.png')) return ContentType('image', 'png');
  if (lower.endsWith('.svg')) return ContentType('image', 'svg+xml');
  if (lower.endsWith('.ico')) return ContentType('image', 'x-icon');
  return ContentType.binary;
}
