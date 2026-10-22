// ignore_for_file: avoid_print

import 'dart:io';

import '../test/bot_test.dart';
import '../test/combat_test.dart';
import '../test/fighter_test.dart';
import '../test/game_test.dart';
import '../test/harness.dart';
import '../test/match_test.dart';
import '../test/math_test.dart';
import '../test/pose_test.dart';

void main() {
  print('Spear test suite');
  print('');
  runMathTests();
  runFighterTests();
  runCombatTests();
  runMatchTests();
  runBotTests();
  runGameTests();
  runPoseTests();
  printSummary();
  if (failures > 0) {
    exit(1);
  }
}
