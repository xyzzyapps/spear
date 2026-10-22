import 'dart:html';

import 'package:spear/app.dart';
import 'package:spear/core/logger.dart';
import 'package:spear/game/fighter.dart';
import 'package:spear/game/game.dart';
import 'package:spear/render/renderer.dart';
import 'package:spear/ui/hud.dart';

void main() {
  try {
    final params = Uri.base.queryParameters;
    final debug = params['debug'] == '1';
    final preview = params['preview'] == '1';
    final pose = params['pose'];
    final ui = params['ui'] != '0';
    final autoplay = params['autoplay'] == '1';
    final botEnabled = params['bot'] != 'off';
    final seed = int.tryParse(params['seed'] ?? '') ?? 1;

    if (!ui) {
      document.body?.classes.add('no-ui');
    }
    if (preview) {
      document.body?.classes.add('preview');
    }

    final canvas = querySelector('#scene') as CanvasElement?;
    if (canvas == null) {
      throw StateError('Missing #scene canvas');
    }

    final game = Game(
      seed: seed,
      logger: Logger(enabled: debug),
      botEnabled: botEnabled,
    );

    if (pose != null) {
      final state = _stateByName(pose);
      if (state != null) {
        final t = double.tryParse(params['t'] ?? '') ?? 0;
        final player = game.match.player;
        player.state = state;
        player.stateTime = t;
        player.walkCycle = state == FighterState.walk ? t * 8.0 : 0;
        player.moveDir = state == FighterState.walk ? 1 : 0;
        game.time = t;
      }
    }

    final renderer = Renderer(canvas);
    final hud = Hud();
    final app = SpearApp(
      canvas: canvas,
      game: game,
      renderer: renderer,
      hud: hud,
      staticPose: preview || pose != null,
      autoplay: autoplay,
    );
    app.boot();
  } catch (error, stack) {
    final errorElement = querySelector('#error');
    if (errorElement != null) {
      errorElement.classes.remove('hidden');
      errorElement.text = 'Homer failed to start.\n$error';
    }
    // ignore: avoid_print
    print('Homer error: $error\n$stack');
  }
}

FighterState? _stateByName(String name) {
  for (final state in FighterState.values) {
    if (state.name == name) return state;
  }
  return null;
}
