// ignore_for_file: avoid_print

import 'dart:io';

Future<void> main() async {
  print('Formatting Dart sources...');
  final format = await Process.run('dart', ['format', '.']);
  stdout.write(format.stdout);
  stderr.write(format.stderr);
  if (format.exitCode != 0) {
    exit(format.exitCode);
  }

  print('Analyzing...');
  final analyze = await Process.run('dart', ['analyze']);
  stdout.write(analyze.stdout);
  stderr.write(analyze.stderr);
  if (analyze.exitCode != 0) {
    exit(analyze.exitCode);
  }

  print('Compiling web/main.dart to app.js...');
  final compile = await Process.run('dart', [
    'compile',
    'js',
    '-O2',
    '--no-source-maps',
    'web/main.dart',
    '-o',
    'app.js',
  ]);
  stdout.write(compile.stdout);
  stderr.write(compile.stderr);
  if (compile.exitCode != 0) {
    exit(compile.exitCode);
  }

  print('Build complete.');
}
