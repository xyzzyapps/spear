import 'dart:developer' as developer;

/// Debug-gated logging facade.
class Logger {
  const Logger({this.enabled = false});

  final bool enabled;

  void debug(String message) {
    if (enabled) developer.log(message, name: 'spear');
  }

  void info(String message) {
    if (enabled) developer.log(message, name: 'spear');
  }

  void warn(String message) {
    if (enabled) developer.log(message, name: 'spear', level: 900);
  }
}
