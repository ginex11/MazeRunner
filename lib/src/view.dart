import 'dart:html';
import 'model.dart';

class MarbleView {
  final coin = querySelector("#coin");

  final marble = querySelector("#marble");

  final output = querySelector("#output");

  final game = querySelector("#game");

  final heart = querySelector("#heart");

  final life = querySelector("#life");

  final startButton = querySelector('#startbutton');

  final level = querySelector('#level');

  final winnerWinner = querySelector('#winner');

  /**
   * Width
   */
  int get width => window.innerWidth;

  /**
   * Height
   */
  int get height => window.innerHeight;

  void coinOff() {
    this.coin.style.display = 'none';
  }

  void coinOn() {
    this.coin.style.display = 'block';
  }

  void marbleOff() {
    this.marble.style.display = 'none';
  }

  void marbleOn() {
    this.marble.style.display = 'block';
  }

  void heartOff() {
    this.heart.style.display = 'none';
  }

  void heartOn() {
    this.heart.style.display = 'block';
  }

  void showStartButton() {
    startButton.style.display = 'block';
    marbleOff();
    coinOff();
    heartOff();
    querySelector('#gameOver').text = "GAME OVER";
  }

  void hideStartButton() {
    querySelector('#gameOver').text = "";
    startButton.style.display = 'none';
    winnerWinner.style.display = "none";

    marbleOn();
    coinOn();
    heartOn();
  }

  void winnerWinnerChickenDinnner(int score) {
    winnerWinner.style.display = "block";
    showStartButton();

    winnerWinner.innerHtml = "<h3>Winner Winner Chicken Dinner<br>Highscore: ${score}<h3>";
  }

  void update(MarbleMaze maze) {
    maze.marble.update();
    output.innerHtml = "Points: ${maze.coinCounter}";
    level.innerHtml = "Level: ${maze.lvlCount}";
    life.innerHtml = "Life: ${maze.marble.life}";
    this.coin.style.top = "${maze.coin.y}px";
    this.coin.style.left = "${maze.coin.x}px";
    this.marble.style.top = "${maze.marble.top}px";
    this.marble.style.left = "${maze.marble.left}px";
    this.heart.style.top = "${maze.heart.y}px";
    this.heart.style.left = "${maze.heart.x}px";
  }
}
