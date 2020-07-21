import 'dart:core';
import 'dart:html';
import 'view.dart';
import 'dart:convert' as JSON;

/*
Globale Variablen für die Anpassung der View
 */
int globalX = 21;
int globalY = 18;
int globalScaleX = 414;
int globalScaleY = 736;

class Marble {
  double x;
  double y;

  double dx = 0.0;
  double dy = 0.0;
  double startX;
  double startY;

  double radius = 15;

  int life = 5; //

  MarbleView view;

  List<List<int>> collision = new List.generate(1, (generator) => new List(2));
  List<int> lastSafe = new List(2);
  MarbleMaze marbleMaze;

  Marble(this.view);

  int get getLife => life;

  void resetModel() {
    marbleMaze.lvlCount = 0;
    life = 5;
    marbleMaze.coinCounter = 0;
  }

  void setPosition(double cx, double cy) {
    this.x = cx;
    this.y = cy;
  }

  int get top => (this.y - radius).floor();

  /**
   * Bottom position in pixels of the circle.
   */
  int get bottom => (this.y + radius).floor();

  /**
   * Left position in pixels of the circle.
   */
  int get left => (this.x - radius).floor();

  /**
   * Right position in pixels of the circle.
   */
  int get right => (this.x + radius + 5).floor();

  void move(double rx, double ry) {
    this.dx = rx;
    this.dy = ry;
  }

  void respawn() {
    if (life == 0) {
    } else {
      this.life--;
      setPosition(startX, startY);
    }
  }

/*
   * Hier findet die Abfrage einer Kollision in marbleMaze statt
   */
  bool isCollision() {
    for (int i = 0; i < collision.length; i++) {
      if (collision[0][1] > 39) {
        collision[0][1] = 39;
      }
      if (collision[0][0] < 0) {
        collision[0][0] = 0;
      }
      if (marbleMaze.maze[collision[i][1]][collision[i][0]] == '1') {
        return true;
      }
      if (marbleMaze.maze[collision[i][1]][collision[i][0]] == '2' && this.marbleMaze.nextLvl) {
        marbleMaze.maze[collision[i][1]][collision[i][0]] =
            '0'; // wird auf '0' gesezt um mehrmalige Aufrufe zu vermeiden.
        this.view.game.children.clear();
        marbleMaze.loadParameter();
        return false;
      }
      if (marbleMaze.maze[collision[i][1]][collision[i][0]] == '3') {
        respawn();
        return true;
      }
    }
    return false;
  }

  void update() {
    this.x += this.dx;
    this.y += this.dy;
    if ((y / (globalY * (window.innerHeight / globalScaleY)).round()) <= 41 &&
        ((x / (globalX * (window.innerWidth / globalScaleX)).round()) /
                    (window.innerWidth / globalScaleX))
                .round() >=
            0 &&
        collision.isNotEmpty) {
      collision[0][0] = (x ~/ (globalX * (window.innerWidth / globalScaleX)).round()).toInt();
      collision[0][1] = (y ~/ (globalY * (window.innerHeight / globalScaleY)).round()).toInt();
      if (isCollision()) {
        respawn();
      }
    }
    if (this.top < 0) this.y = this.radius;
    if (this.bottom > this.view.height - 1) this.y = this.view.height - 1 - this.radius;

    if (this.left < 0) this.x = this.radius;
    if (this.right > this.view.width - 1) this.x = this.view.width - 1 - this.radius;
  }
}

abstract class Item_Trap {
  double x;
  double y;

  Item_Trap(this.x, this.y);
}

class Coin extends Item_Trap {
  int value;

  Coin(double x, double y, this.value) : super(x, y);
}

class Heart extends Item_Trap {
  int value;

  Heart(double x, double y, this.value) : super(x, y);
}

/*
  * Das Spielfeld auf dem sich alle Objekte befinden
  */
class MarbleMaze {
  Marble _marble;
  Coin coin;
  int sizeX = 20; // Breite des Spiels in der maze Liste
  int sizeY = 40; // Höhe des Spiels in der maze Liste
  int lvlCount = 0;
  bool nextLvl = false;
  Heart heart;

  String _level1 = "LEER"; // Hier wird das Level gespeichert

  int coinCounter = 0;
  List<List<String>> maze; // Hier wird _level1 in einer 2D Liste gespeichert
  var game = querySelector("#game");

  MarbleMaze(Marble marble) {
    this.marble = marble;
  }

  set marble(Marble value) {
    _marble = value;
  }

  Marble get marble => _marble;

  String get level1 => _level1;

  /*
   * die Parameter aus JSON Datei werden herausgelesen
   */
  void loadParameter() async {
    Map level;
    await HttpRequest.getString("gameConfig.json").then((json) {
      level = JSON.jsonDecode(json);
      if (lvlCount > 9) {
        lvlCount = 0;
      }
      this.level1 = level['level'][lvlCount]['lvlDesign'].join();
      this.marble.startX = (level['level'][lvlCount]['playerStart']['x'] as double) *
          (globalX * (window.innerWidth / globalScaleX));
      this.marble.startY = (level['level'][lvlCount]['playerStart']['y'] as double) *
          (globalY * (window.innerHeight / globalScaleY));
      this.marble.setPosition(
          (level['level'][lvlCount]['playerStart']['x'] as double) *
              (globalX * (window.innerWidth / globalScaleX)),
          (level['level'][lvlCount]['playerStart']['y'] as double) *
              (globalY * (window.innerHeight / globalScaleY)));
      this.heart = new Heart(
          (level['level'][lvlCount]['heart']['x'] as double) *
              (globalX * (window.innerWidth / globalScaleX)),
          (level['level'][lvlCount]['heart']['y'] as double) *
              (globalY * (window.innerHeight / globalScaleY)),
          1);
      this.coin = new Coin(
          (level['level'][lvlCount]['coin']['x'] as double) *
              (globalX * (window.innerWidth / globalScaleX)),
          (level['level'][lvlCount]['coin']['y'] as double) *
              (globalY * (window.innerHeight / globalScaleY)),
          level['level'][lvlCount]['coin']['value']);
      marble.view.coin.innerHtml = "${level['level'][lvlCount]['coin']['value']}";
      marble.view.coin.style.top = "${coin.y}px";
      marble.view.coin.style.left = "${coin.x}px";
      marble.view.coinOn();
      marble.view.heart.innerHtml = "&#10084";
      marble.view.heart.style.top = "${heart.y}px";
      marble.view.heart.style.left = "${heart.x}px";
      marble.view.heartOn();
    });

    this.genField();
    this.loadMaze();
    //marble.view.update(this);
    lvlCount++;
    nextLvl = true;
  }

  set level1(String value) {
    _level1 = value;
  }

  /*
   * generiert eine Liste mit dem Labyrinth
   */
  void genField() {
    List<String> map = level1.split("");
    this.maze = new List.generate(sizeY, (i) => new List(sizeX));
    for (int i = 0, k = 0; i < maze.length; i++) {
      for (int j = 0; j < maze[i].length; j++, k++) {
        maze[i][j] = map[k];
      }
    }
  }

  /*
   * erstellt aus der Liste mit Labyrinth eine View
   */
  void loadMaze() {
    String txt = "";
    for (int i = 0; i < maze.length; i++) {
      txt += "<tr>";
      for (int j = 0; j < maze[i].length; j++) {
        txt += "<td headers='${maze[i][j]}'></td>";
      }
      txt += "</tr>";
    }
    game.style.width = "${window.innerWidth}px";
    game.style.height = "${window.innerHeight}px";
    game.innerHtml = txt;
    var temp = game.querySelectorAll("#game td");
    for (var i in temp) {
      if (i.getAttribute("headers") == "1") {
        i.style.backgroundImage = "url(images/Stein.png)";
        i.style.backgroundPosition = "center";
        i.style.backgroundSize = "contain";
      }
      if (i.getAttribute("headers") == "2") {
        // Das Ziel
        i.style.backgroundImage = "url(images/finish.png)";
        i.style.backgroundPosition = "center";
        i.style.backgroundSize = "contain";
        i.style.backgroundRepeat = "repeat";
      }
      if (i.getAttribute("headers") == "3") {
        i.style.borderRight = "1px solid #000000";
        i.style.backgroundImage = "url(images/Stein.png)";
        i.style.backgroundPosition = "center";
        i.style.backgroundSize = "contain";
      }
      if (i.getAttribute("headers") == "0") {
        i.style.backgroundImage = "url(images/Stein2.png)";
        i.style.backgroundPosition = "center";
        i.style.backgroundSize = "contain";
      }
    }
  }

  /*
   * Coin detection
   */
  bool isCoin() {
    if ((this.marble.x - this.coin.x).abs().round() <= 30 &&
        (this.marble.y - this.coin.y).abs().round() <= 30) {
      return true;
    }
    return false;
  }

  /*
   * Heart detection
   */
  bool isHeart() {
    if ((this.marble.x - this.heart.x).abs().round() <= 30 &&
        (this.marble.y - this.heart.y).abs().round() <= 30) {
      return true;
    }
    return false;
  }

  void increaseLife(int value) {
    marble.life += value;
  }
}
