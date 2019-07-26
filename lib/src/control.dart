import 'dart:core';
import 'dart:html';
import 'model.dart';
import 'dart:math';
import 'view.dart';


var _over = false;

class GameController {
  static final view = new MarbleView();
  MarbleMaze marbleMazeGame;
  Marble marble = new Marble(view);
  var _mobile = false;

  GameController() {
    marbleMazeGame = new MarbleMaze(marble);
    marble.marbleMaze = marbleMazeGame;
  }

  startGame() async {
    querySelector('#startbutton').onClick.listen((_) async {
      _over = false;
      view.hideStartButton();
      await marbleMazeGame.loadParameter();
      view.update(marbleMazeGame);
      loadDesktopKeyListener();
      loadDeviceOrientationListener();
    });
  }


  test() {
    if (marbleMazeGame.isHeart() && _over == false) {
      view.heartOff();
      marbleMazeGame.increaseLife(marbleMazeGame.heart.value);
      marbleMazeGame.heart.value = 0;
    }
    if (marbleMazeGame.isCoin() && _over == false) {
      view.coinOff();
      marbleMazeGame.coinCounter += marbleMazeGame.coin.value;
      marbleMazeGame.coin.value = 0;
    }
    if (marbleMazeGame.marble.life == 0 && _over == false) {
      marble.resetModel();
      view.showStartButton();
      _over = true;
    }
    if(marbleMazeGame.lvlCount==10){
      marble.view.winnerWinnerChickenDinnner(marbleMazeGame.coinCounter);
      _over = true;
    }
  }

  /**
   * Listener for mobile devices
   */
  loadDeviceOrientationListener() {
    window.onDeviceOrientation.listen((ev) {
      if (_over == false) {
        _mobile = true;
        if (_over == false) {
          final dy = (min(50, max(10, ev.beta)) - 30) / 4;
          final dx = (min(20, max(-20, ev.gamma))) / 4;
          marbleMazeGame.marble.move(dx, dy);
          test();
          view.update(marbleMazeGame);
        }
      }
    });
  }


/*
    Loads the key listener for movement on desktops
    Key A: Left
    Key D: Right
    Key W: Up
    Key S: Down
   */
  loadDesktopKeyListener() {
    if (_mobile == false && _over == false) {
      //do nothing
      window.onKeyDown.listen((KeyboardEvent e) {
        if (_over == false) {
          if ((e.keyCode == KeyCode.LEFT || e.keyCode == KeyCode.A))
            marbleMazeGame.marble.move(-10, 0);

          if ((e.keyCode == KeyCode.RIGHT || e.keyCode == KeyCode.D))
            marbleMazeGame.marble.move(10, 0);

          if ((e.keyCode == KeyCode.UP || e.keyCode == KeyCode.W))
            marbleMazeGame.marble.move(0, -10);

          if ((e.keyCode == KeyCode.DOWN || e.keyCode == KeyCode.S))
            marbleMazeGame.marble.move(0, 10);

          test();
          view.update(marbleMazeGame);
        }
      });
    }
  }
}
