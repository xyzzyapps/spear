import 'dart:html';

import '../game/fighter.dart';
import '../game/game.dart';
import '../game/match.dart';

/// DOM HUD: health pips, score, round timer, banners, and overlays.
class Hud {
  Hud() {
    _playerPipsEl = querySelector('#player-pips') as Element;
    _botPipsEl = querySelector('#bot-pips') as Element;
    _playerScore = querySelector('#player-score') as Element;
    _botScore = querySelector('#bot-score') as Element;
    _roundLabel = querySelector('#round-label') as Element;
    _timerFill = querySelector('#timer-fill') as Element;
    _banner = querySelector('#banner') as Element;
    _overlay = querySelector('#overlay') as Element;
    _overlayTitle = querySelector('#overlay-title') as Element;
    _overlaySub = querySelector('#overlay-sub') as Element;
    startButton = querySelector('#start-button') as ButtonElement;

    for (var i = 0; i < maxHp; i++) {
      final playerPip = DivElement()..className = 'pip';
      final botPip = DivElement()..className = 'pip';
      _playerPipsEl.append(playerPip);
      _botPipsEl.append(botPip);
      _playerPips.add(playerPip);
      _botPips.add(botPip);
    }
  }

  late final Element _playerPipsEl;
  late final Element _botPipsEl;
  late final Element _playerScore;
  late final Element _botScore;
  late final Element _roundLabel;
  late final Element _timerFill;
  late final Element _banner;
  late final Element _overlay;
  late final Element _overlayTitle;
  late final Element _overlaySub;

  final List<Element> _playerPips = <Element>[];
  final List<Element> _botPips = <Element>[];

  late final ButtonElement startButton;

  void update(GameSnapshot snapshot) {
    for (var i = 0; i < maxHp; i++) {
      _playerPips[i].classes.toggle('empty', i >= snapshot.playerHp);
      _botPips[i].classes.toggle('empty', i >= snapshot.botHp);
    }

    _playerScore.text = '${snapshot.playerWins}';
    _botScore.text = '${snapshot.botWins}';

    if (snapshot.isMatchOver) {
      _roundLabel.text = 'MATCH OVER';
    } else if (snapshot.suddenDeath) {
      _roundLabel.text = 'SUDDEN DEATH';
    } else {
      _roundLabel.text = 'ROUND ${snapshot.round} / ${snapshot.maxRounds}';
    }

    final timer = (snapshot.roundTime / roundDuration * 100).clamp(0, 100);
    _timerFill.style.width = '${timer.toStringAsFixed(1)}%';

    final showBanner =
        snapshot.started &&
        snapshot.bannerTime > 0 &&
        snapshot.banner.isNotEmpty &&
        !snapshot.isMatchOver;
    _banner.text = snapshot.banner;
    _banner.classes.toggle('show', showBanner);

    final overlayVisible = !snapshot.started || snapshot.isMatchOver;
    _overlay.classes.toggle('hidden', !overlayVisible);

    if (!snapshot.started) {
      _overlayTitle.text = 'YOU vs BOT';
      _overlaySub.text = 'Red crest vs white crest. First to 6 rounds.';
      startButton.text = 'START DUEL';
    } else if (snapshot.isMatchOver) {
      _overlayTitle.text = _resultText(snapshot.result);
      _overlaySub.text =
          'Round wins ${snapshot.playerWins} - ${snapshot.botWins}';
      startButton.text = 'REMATCH';
    }
  }

  String _resultText(MatchResult result) => switch (result) {
    MatchResult.playerWin => 'YOU WIN',
    MatchResult.botWin => 'BOT WINS',
    MatchResult.draw => 'DRAW',
    MatchResult.none => '',
  };
}
