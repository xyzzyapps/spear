// ignore_for_file: avoid_print

import 'dart:async';
import 'dart:convert';
import 'dart:io';

// 9222 is commonly held by the developer's own Chrome instance. The smoke
// browser uses a separate port and profile so it never attaches to that tab.
const int _debugPort = 9333;
const String _pageUrl = 'http://127.0.0.1:4173/?debug=1&seed=7&bot=off';
const String _shotPath = 'build/smoke.png';

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
  print('Spear browser smoke test');
  print('');

  final chrome = _findChrome();
  final profile = Directory('build/smoke-profile')..createSync(recursive: true);
  final process = await Process.start(chrome, <String>[
    '--headless=new',
    '--remote-debugging-port=$_debugPort',
    '--remote-allow-origins=*',
    '--user-data-dir=${profile.absolute.path}',
    '--no-first-run',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=480,270',
    _pageUrl,
  ]);
  process.stdout.drain<void>();
  process.stderr.drain<void>();

  WebSocket? socket;
  try {
    final target = await _waitForTarget();
    socket = await WebSocket.connect(target);
    final client = _CdpClient(socket);

    await client.send('Runtime.enable');
    await client.send('Page.enable');
    await client.send('Emulation.setDeviceMetricsOverride', <String, dynamic>{
      'width': 480,
      'height': 270,
      'deviceScaleFactor': 1,
      'mobile': false,
    });
    await _waitFor(
      () async =>
          await client.evaluate('document.documentElement.dataset.ready') ==
          '1',
      'page ready',
    );

    final initial = await _dataset(client);
    _check(initial['started'] == '0', 'the page waits for the start button');
    _check(initial['phase'] == 'roundIntro', 'the match starts at round one');

    await client.evaluate("document.querySelector('#start-button').click()");
    await _waitFor(
      () async =>
          await client.evaluate('document.documentElement.dataset.started') ==
          '1',
      'started state',
    );
    await _waitFor(
      () async =>
          await client.evaluate('document.documentElement.dataset.phase') ==
          'fighting',
      'fighting phase',
    );

    await _capture(client, 'build/smoke_idle.png');

    await client.keyDown('k', 'KeyK', 75);
    await Future<void>.delayed(const Duration(milliseconds: 120));
    final blockState = await client.evaluate(
      'document.documentElement.dataset.playerState',
    );
    _check(blockState == 'block', 'block input reaches the fighter');
    await _capture(client, 'build/smoke_block.png');
    await client.keyUp('k', 'KeyK', 75);
    await Future<void>.delayed(const Duration(milliseconds: 220));

    await client.key('j', 'KeyJ', 74);
    await Future<void>.delayed(const Duration(milliseconds: 80));
    final attackState = await client.evaluate(
      'document.documentElement.dataset.playerState',
    );
    _check(
      <String>['windup', 'attack', 'recover'].contains(attackState),
      'attack input reaches the fighter (got $attackState)',
    );
    await Future<void>.delayed(const Duration(milliseconds: 130));
    await _capture(client, 'build/smoke_attack.png');

    await Future<void>.delayed(const Duration(milliseconds: 800));
    await client.keyDown('d', 'KeyD', 68);
    await Future<void>.delayed(const Duration(milliseconds: 220));
    await _capture(client, 'build/smoke_walk.png');
    await Future<void>.delayed(const Duration(milliseconds: 180));
    final moveState = await client.evaluate(
      'document.documentElement.dataset.playerState',
    );
    _check(
      <String>['walk', 'idle', 'block'].contains(moveState),
      'movement input reaches the fighter (got $moveState)',
    );
    await client.keyUp('d', 'KeyD', 68);

    await _capture(client, _shotPath);

    final finalState = await _dataset(client);
    print('');
    print(
      'state: phase=${finalState['phase']} round=${finalState['round']} '
      'playerHp=${finalState['playerHp']} botHp=${finalState['botHp']} '
      'playerWins=${finalState['playerWins']} botWins=${finalState['botWins']}',
    );
  } catch (error, stack) {
    _check(false, 'smoke test threw: $error');
    print(stack);
  } finally {
    await socket?.close();
    process.kill();
    await Future<void>.delayed(const Duration(milliseconds: 250));
    try {
      profile.deleteSync(recursive: true);
    } on FileSystemException {
      // Chrome may still hold a lock on the profile; it is inside build/.
    }
  }

  print('');
  if (_failures.isEmpty) {
    print('Smoke test passed.');
    return;
  }
  print('${_failures.length} smoke check(s) failed.');
  exit(1);
}

Future<void> _capture(_CdpClient client, String path) async {
  final screenshot = await client.send(
    'Page.captureScreenshot',
    <String, dynamic>{'format': 'png'},
  );
  final data = screenshot['data'];
  if (data is String) {
    File(path).writeAsBytesSync(base64Decode(data));
    print('ok   wrote $path');
  } else {
    _check(false, 'screenshot data is present for $path');
  }
}

Future<Map<String, dynamic>> _dataset(_CdpClient client) async {
  final raw = await client.evaluate(
    'JSON.stringify(document.documentElement.dataset)',
  );
  if (raw is! String) {
    throw StateError('dataset was not a string: $raw');
  }
  return jsonDecode(raw) as Map<String, dynamic>;
}

Future<void> _waitFor(Future<bool> Function() condition, String label) async {
  final deadline = DateTime.now().add(const Duration(seconds: 12));
  while (DateTime.now().isBefore(deadline)) {
    if (await condition()) {
      return;
    }
    await Future<void>.delayed(const Duration(milliseconds: 100));
  }
  throw StateError('Timed out waiting for $label');
}

Future<String> _waitForTarget() async {
  final client = HttpClient();
  try {
    for (var i = 0; i < 60; i++) {
      try {
        final request = await client.getUrl(
          Uri.parse('http://127.0.0.1:$_debugPort/json'),
        );
        final response = await request.close();
        final body = await response.transform(utf8.decoder).join();
        final list = jsonDecode(body) as List<dynamic>;
        for (final entry in list) {
          final map = entry as Map<String, dynamic>;
          final url = map['url'];
          if (map['type'] == 'page' &&
              url is String &&
              url.startsWith('http')) {
            return map['webSocketDebuggerUrl'] as String;
          }
        }
      } on Object {
        // Chrome is still starting.
      }
      await Future<void>.delayed(const Duration(milliseconds: 200));
    }
  } finally {
    client.close(force: true);
  }
  throw StateError('Chrome DevTools target was not found');
}

String _findChrome() {
  const candidates = <String>[
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
  ];
  for (final path in candidates) {
    if (File(path).existsSync()) return path;
  }
  throw StateError('Chrome or Edge was not found');
}

class _CdpClient {
  _CdpClient(this._socket) {
    _subscription = _socket.listen((data) {
      final text = data is String ? data : utf8.decode(data as List<int>);
      final message = jsonDecode(text) as Map<String, dynamic>;
      final id = message['id'];
      if (id is! int) return;
      final completer = _pending.remove(id);
      if (completer == null) return;
      final error = message['error'];
      if (error != null) {
        completer.completeError(StateError('CDP error: $error'));
        return;
      }
      final result = message['result'];
      completer.complete(
        result is Map<String, dynamic> ? result : <String, dynamic>{},
      );
    });
  }

  final WebSocket _socket;
  late final StreamSubscription<dynamic> _subscription;
  final Map<int, Completer<Map<String, dynamic>>> _pending =
      <int, Completer<Map<String, dynamic>>>{};
  int _nextId = 1;

  Future<Map<String, dynamic>> send(
    String method, [
    Map<String, dynamic>? params,
  ]) {
    final id = _nextId++;
    final completer = Completer<Map<String, dynamic>>();
    _pending[id] = completer;
    _socket.add(
      jsonEncode(<String, dynamic>{
        'id': id,
        'method': method,
        if (params != null) 'params': params,
      }),
    );
    return completer.future.timeout(const Duration(seconds: 10));
  }

  Future<dynamic> evaluate(String expression) async {
    final result = await send('Runtime.evaluate', <String, dynamic>{
      'expression': expression,
      'returnByValue': true,
      'awaitPromise': true,
    });
    final inner = result['result'];
    if (inner is Map<String, dynamic>) {
      return inner['value'];
    }
    return null;
  }

  Future<void> key(String key, String code, int virtualKey) async {
    await keyDown(key, code, virtualKey);
    await keyUp(key, code, virtualKey);
  }

  Future<void> keyDown(String key, String code, int virtualKey) =>
      send('Input.dispatchKeyEvent', <String, dynamic>{
        'type': 'keyDown',
        'key': key,
        'code': code,
        'windowsVirtualKeyCode': virtualKey,
        'nativeVirtualKeyCode': virtualKey,
      });

  Future<void> keyUp(String key, String code, int virtualKey) =>
      send('Input.dispatchKeyEvent', <String, dynamic>{
        'type': 'keyUp',
        'key': key,
        'code': code,
        'windowsVirtualKeyCode': virtualKey,
        'nativeVirtualKeyCode': virtualKey,
      });

  Future<void> close() async {
    await _subscription.cancel();
    await _socket.close();
  }
}
