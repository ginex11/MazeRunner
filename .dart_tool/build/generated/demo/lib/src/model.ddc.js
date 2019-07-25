define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__view = Object.create(dart.library);
  const src__model = Object.create(dart.library);
  const $display = dartx.display;
  const $text = dartx.text;
  const $innerHtml = dartx.innerHtml;
  const $top = dartx.top;
  const $left = dartx.left;
  const $floor = dartx.floor;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $children = dartx.children;
  const $clear = dartx.clear;
  const $round = dartx.round;
  const $isNotEmpty = dartx.isNotEmpty;
  const $toInt = dartx.toInt;
  const $split = dartx.split;
  const $width = dartx.width;
  const $height = dartx.height;
  const $querySelectorAll = dartx.querySelectorAll;
  const $getAttribute = dartx.getAttribute;
  const $backgroundImage = dartx.backgroundImage;
  const $backgroundPosition = dartx.backgroundPosition;
  const $backgroundSize = dartx.backgroundSize;
  const $backgroundRepeat = dartx.backgroundRepeat;
  const $borderRight = dartx.borderRight;
  const $abs = dartx.abs;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let intToListOfint = () => (intToListOfint = dart.constFn(dart.fnType(ListOfint(), [core.int])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfListOfString = () => (ListOfListOfString = dart.constFn(core.List$(ListOfString())))();
  let intToListOfString = () => (intToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.int])))();
  src__view.MarbleView = class MarbleView extends core.Object {
    get coin() {
      return this[coin];
    }
    set coin(value) {
      super.coin = value;
    }
    get marble() {
      return this[marble];
    }
    set marble(value) {
      super.marble = value;
    }
    get output() {
      return this[output];
    }
    set output(value) {
      super.output = value;
    }
    get game() {
      return this[game];
    }
    set game(value) {
      super.game = value;
    }
    get heart() {
      return this[heart];
    }
    set heart(value) {
      super.heart = value;
    }
    get life() {
      return this[life];
    }
    set life(value) {
      super.life = value;
    }
    get startButton() {
      return this[startButton];
    }
    set startButton(value) {
      super.startButton = value;
    }
    get level() {
      return this[level];
    }
    set level(value) {
      super.level = value;
    }
    get winnerWinner() {
      return this[winnerWinner];
    }
    set winnerWinner(value) {
      super.winnerWinner = value;
    }
    get width() {
      return html.window.innerWidth;
    }
    get height() {
      return html.window.innerHeight;
    }
    coinOff() {
      this.coin.style[$display] = "none";
    }
    coinOn() {
      this.coin.style[$display] = "block";
    }
    marbleOff() {
      this.marble.style[$display] = "none";
    }
    marbleOn() {
      this.marble.style[$display] = "block";
    }
    heartOff() {
      this.heart.style[$display] = "none";
    }
    heartOn() {
      this.heart.style[$display] = "block";
    }
    showStartButton() {
      this.startButton.style[$display] = "block";
      this.marbleOff();
      this.coinOff();
      this.heartOff();
      html.querySelector("#gameOver")[$text] = "GAME OVER";
    }
    hideStartButton() {
      html.querySelector("#gameOver")[$text] = "";
      this.startButton.style[$display] = "none";
      this.winnerWinner.style[$display] = "none";
      this.marbleOn();
      this.coinOn();
      this.heartOn();
    }
    winnerWinnerChickenDinnner(score) {
      this.winnerWinner.style[$display] = "block";
      this.showStartButton();
      this.winnerWinner[$innerHtml] = "<h3>Winner Winner Chicken Dinner<br>Highscore: " + dart.str(score) + "<h3>";
    }
    update(maze) {
      maze.marble.update();
      this.output[$innerHtml] = "Points: " + dart.str(maze.coinCounter);
      this.level[$innerHtml] = "Level: " + dart.str(maze.lvlCount);
      this.life[$innerHtml] = "Life: " + dart.str(maze.marble.life);
      this.coin.style[$top] = dart.str(maze.coin.y) + "px";
      this.coin.style[$left] = dart.str(maze.coin.x) + "px";
      this.marble.style[$top] = dart.str(maze.marble.top) + "px";
      this.marble.style[$left] = dart.str(maze.marble.left) + "px";
      this.heart.style[$top] = dart.str(maze.heart.y) + "px";
      this.heart.style[$left] = dart.str(maze.heart.x) + "px";
    }
  };
  (src__view.MarbleView.new = function() {
    this[coin] = html.querySelector("#coin");
    this[marble] = html.querySelector("#marble");
    this[output] = html.querySelector("#output");
    this[game] = html.querySelector("#game");
    this[heart] = html.querySelector("#heart");
    this[life] = html.querySelector("#life");
    this[startButton] = html.querySelector("#startbutton");
    this[level] = html.querySelector("#level");
    this[winnerWinner] = html.querySelector("#winner");
    ;
  }).prototype = src__view.MarbleView.prototype;
  dart.addTypeTests(src__view.MarbleView);
  const coin = Symbol("MarbleView.coin");
  const marble = Symbol("MarbleView.marble");
  const output = Symbol("MarbleView.output");
  const game = Symbol("MarbleView.game");
  const heart = Symbol("MarbleView.heart");
  const life = Symbol("MarbleView.life");
  const startButton = Symbol("MarbleView.startButton");
  const level = Symbol("MarbleView.level");
  const winnerWinner = Symbol("MarbleView.winnerWinner");
  dart.setMethodSignature(src__view.MarbleView, () => ({
    __proto__: dart.getMethods(src__view.MarbleView.__proto__),
    coinOff: dart.fnType(dart.void, []),
    coinOn: dart.fnType(dart.void, []),
    marbleOff: dart.fnType(dart.void, []),
    marbleOn: dart.fnType(dart.void, []),
    heartOff: dart.fnType(dart.void, []),
    heartOn: dart.fnType(dart.void, []),
    showStartButton: dart.fnType(dart.void, []),
    hideStartButton: dart.fnType(dart.void, []),
    winnerWinnerChickenDinnner: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [src__model.MarbleMaze])
  }));
  dart.setGetterSignature(src__view.MarbleView, () => ({
    __proto__: dart.getGetters(src__view.MarbleView.__proto__),
    width: core.int,
    height: core.int
  }));
  dart.setLibraryUri(src__view.MarbleView, "package:demo/src/view.dart");
  dart.setFieldSignature(src__view.MarbleView, () => ({
    __proto__: dart.getFields(src__view.MarbleView.__proto__),
    coin: dart.finalFieldType(html.Element),
    marble: dart.finalFieldType(html.Element),
    output: dart.finalFieldType(html.Element),
    game: dart.finalFieldType(html.Element),
    heart: dart.finalFieldType(html.Element),
    life: dart.finalFieldType(html.Element),
    startButton: dart.finalFieldType(html.Element),
    level: dart.finalFieldType(html.Element),
    winnerWinner: dart.finalFieldType(html.Element)
  }));
  src__model.Marble = class Marble extends core.Object {
    get x() {
      return this[x];
    }
    set x(value) {
      this[x] = value;
    }
    get y() {
      return this[y];
    }
    set y(value) {
      this[y] = value;
    }
    get dx() {
      return this[dx];
    }
    set dx(value) {
      this[dx] = value;
    }
    get dy() {
      return this[dy];
    }
    set dy(value) {
      this[dy] = value;
    }
    get startX() {
      return this[startX];
    }
    set startX(value) {
      this[startX] = value;
    }
    get startY() {
      return this[startY];
    }
    set startY(value) {
      this[startY] = value;
    }
    get radius() {
      return this[radius];
    }
    set radius(value) {
      this[radius] = value;
    }
    get life() {
      return this[life$];
    }
    set life(value) {
      this[life$] = value;
    }
    get view() {
      return this[view$];
    }
    set view(value) {
      this[view$] = value;
    }
    get collision() {
      return this[collision];
    }
    set collision(value) {
      this[collision] = value;
    }
    get lastSafe() {
      return this[lastSafe];
    }
    set lastSafe(value) {
      this[lastSafe] = value;
    }
    get marbleMaze() {
      return this[marbleMaze];
    }
    set marbleMaze(value) {
      this[marbleMaze] = value;
    }
    get getLife() {
      return this.life;
    }
    resetModel() {
      this.marbleMaze.lvlCount = 0;
      this.life = 5;
      this.marbleMaze.coinCounter = 0;
    }
    setPosition(cx, cy) {
      this.x = cx;
      this.y = cy;
    }
    get top() {
      return (dart.notNull(this.y) - dart.notNull(this.radius))[$floor]();
    }
    get bottom() {
      return (dart.notNull(this.y) + dart.notNull(this.radius))[$floor]();
    }
    get left() {
      return (dart.notNull(this.x) - dart.notNull(this.radius))[$floor]();
    }
    get right() {
      return (dart.notNull(this.x) + dart.notNull(this.radius) + 5)[$floor]();
    }
    move(rx, ry) {
      this.dx = rx;
      this.dy = ry;
    }
    respawn() {
      if (this.life === 0) {
      } else {
        this.life = dart.notNull(this.life) - 1;
        this.setPosition(this.startX, this.startY);
      }
    }
    isCollision() {
      for (let i = 0; i < dart.notNull(this.collision[$length]); i = i + 1) {
        if (dart.notNull(this.collision[$_get](0)[$_get](1)) > 39) {
          this.collision[$_get](0)[$_set](1, 39);
        }
        if (dart.notNull(this.collision[$_get](0)[$_get](0)) < 0) {
          this.collision[$_get](0)[$_set](0, 0);
        }
        if (this.marbleMaze.maze[$_get](this.collision[$_get](i)[$_get](1))[$_get](this.collision[$_get](i)[$_get](0)) === "1") {
          return true;
        }
        if (this.marbleMaze.maze[$_get](this.collision[$_get](i)[$_get](1))[$_get](this.collision[$_get](i)[$_get](0)) === "2" && dart.test(this.marbleMaze.nextLvl)) {
          this.marbleMaze.maze[$_get](this.collision[$_get](i)[$_get](1))[$_set](this.collision[$_get](i)[$_get](0), "0");
          this.view.game[$children][$clear]();
          this.marbleMaze.loadParameter();
          return false;
        }
        if (this.marbleMaze.maze[$_get](this.collision[$_get](i)[$_get](1))[$_get](this.collision[$_get](i)[$_get](0)) === "3") {
          this.respawn();
          return true;
        }
      }
      return false;
    }
    update() {
      this.x = dart.notNull(this.x) + dart.notNull(this.dx);
      this.y = dart.notNull(this.y) + dart.notNull(this.dy);
      if (dart.notNull(this.y) / (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY)))[$round]() <= 41 && (dart.notNull(this.x) / (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX)))[$round]() / (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX)))[$round]() >= 0 && dart.test(this.collision[$isNotEmpty])) {
        this.collision[$_get](0)[$_set](0, (dart.notNull(this.x) / (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX)))[$round]())[$toInt]());
        this.collision[$_get](0)[$_set](1, (dart.notNull(this.y) / (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY)))[$round]())[$toInt]());
        if (dart.test(this.isCollision())) {
          this.respawn();
        }
      }
      if (dart.notNull(this.top) < 0) this.y = this.radius;
      if (dart.notNull(this.bottom) > dart.notNull(this.view.height) - 1) this.y = dart.notNull(this.view.height) - 1 - dart.notNull(this.radius);
      if (dart.notNull(this.left) < 0) this.x = this.radius;
      if (dart.notNull(this.right) > dart.notNull(this.view.width) - 1) this.x = dart.notNull(this.view.width) - 1 - dart.notNull(this.radius);
    }
  };
  (src__model.Marble.new = function(view) {
    this[x] = null;
    this[y] = null;
    this[dx] = 0.0;
    this[dy] = 0.0;
    this[startX] = null;
    this[startY] = null;
    this[radius] = 15.0;
    this[life$] = 5;
    this[collision] = ListOfListOfint().generate(1, dart.fn(generator => ListOfint().new(2), intToListOfint()));
    this[lastSafe] = ListOfint().new(2);
    this[marbleMaze] = null;
    this[view$] = view;
    ;
  }).prototype = src__model.Marble.prototype;
  dart.addTypeTests(src__model.Marble);
  const x = Symbol("Marble.x");
  const y = Symbol("Marble.y");
  const dx = Symbol("Marble.dx");
  const dy = Symbol("Marble.dy");
  const startX = Symbol("Marble.startX");
  const startY = Symbol("Marble.startY");
  const radius = Symbol("Marble.radius");
  const life$ = Symbol("Marble.life");
  const view$ = Symbol("Marble.view");
  const collision = Symbol("Marble.collision");
  const lastSafe = Symbol("Marble.lastSafe");
  const marbleMaze = Symbol("Marble.marbleMaze");
  dart.setMethodSignature(src__model.Marble, () => ({
    __proto__: dart.getMethods(src__model.Marble.__proto__),
    resetModel: dart.fnType(dart.void, []),
    setPosition: dart.fnType(dart.void, [core.double, core.double]),
    move: dart.fnType(dart.void, [core.double, core.double]),
    respawn: dart.fnType(dart.void, []),
    isCollision: dart.fnType(core.bool, []),
    update: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__model.Marble, () => ({
    __proto__: dart.getGetters(src__model.Marble.__proto__),
    getLife: core.int,
    top: core.int,
    bottom: core.int,
    left: core.int,
    right: core.int
  }));
  dart.setLibraryUri(src__model.Marble, "package:demo/src/model.dart");
  dart.setFieldSignature(src__model.Marble, () => ({
    __proto__: dart.getFields(src__model.Marble.__proto__),
    x: dart.fieldType(core.double),
    y: dart.fieldType(core.double),
    dx: dart.fieldType(core.double),
    dy: dart.fieldType(core.double),
    startX: dart.fieldType(core.double),
    startY: dart.fieldType(core.double),
    radius: dart.fieldType(core.double),
    life: dart.fieldType(core.int),
    view: dart.fieldType(src__view.MarbleView),
    collision: dart.fieldType(core.List$(core.List$(core.int))),
    lastSafe: dart.fieldType(core.List$(core.int)),
    marbleMaze: dart.fieldType(src__model.MarbleMaze)
  }));
  src__model.Item_Trap = class Item_Trap extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      this[x$] = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      this[y$] = value;
    }
  };
  (src__model.Item_Trap.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    ;
  }).prototype = src__model.Item_Trap.prototype;
  dart.addTypeTests(src__model.Item_Trap);
  const x$ = Symbol("Item_Trap.x");
  const y$ = Symbol("Item_Trap.y");
  dart.setLibraryUri(src__model.Item_Trap, "package:demo/src/model.dart");
  dart.setFieldSignature(src__model.Item_Trap, () => ({
    __proto__: dart.getFields(src__model.Item_Trap.__proto__),
    x: dart.fieldType(core.double),
    y: dart.fieldType(core.double)
  }));
  src__model.Coin = class Coin extends src__model.Item_Trap {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (src__model.Coin.new = function(x, y, value) {
    this[value$] = value;
    src__model.Coin.__proto__.new.call(this, x, y);
    ;
  }).prototype = src__model.Coin.prototype;
  dart.addTypeTests(src__model.Coin);
  const value$ = Symbol("Coin.value");
  dart.setLibraryUri(src__model.Coin, "package:demo/src/model.dart");
  dart.setFieldSignature(src__model.Coin, () => ({
    __proto__: dart.getFields(src__model.Coin.__proto__),
    value: dart.fieldType(core.int)
  }));
  src__model.Heart = class Heart extends src__model.Item_Trap {
    get value() {
      return this[value$0];
    }
    set value(value) {
      this[value$0] = value;
    }
  };
  (src__model.Heart.new = function(x, y, value) {
    this[value$0] = value;
    src__model.Heart.__proto__.new.call(this, x, y);
    ;
  }).prototype = src__model.Heart.prototype;
  dart.addTypeTests(src__model.Heart);
  const value$0 = Symbol("Heart.value");
  dart.setLibraryUri(src__model.Heart, "package:demo/src/model.dart");
  dart.setFieldSignature(src__model.Heart, () => ({
    __proto__: dart.getFields(src__model.Heart.__proto__),
    value: dart.fieldType(core.int)
  }));
  const _marble = dart.privateName(src__model, "_marble");
  const _level1 = dart.privateName(src__model, "_level1");
  src__model.MarbleMaze = class MarbleMaze extends core.Object {
    get coin() {
      return this[coin$];
    }
    set coin(value) {
      this[coin$] = value;
    }
    get sizeX() {
      return this[sizeX];
    }
    set sizeX(value) {
      this[sizeX] = value;
    }
    get sizeY() {
      return this[sizeY];
    }
    set sizeY(value) {
      this[sizeY] = value;
    }
    get lvlCount() {
      return this[lvlCount];
    }
    set lvlCount(value) {
      this[lvlCount] = value;
    }
    get nextLvl() {
      return this[nextLvl];
    }
    set nextLvl(value) {
      this[nextLvl] = value;
    }
    get heart() {
      return this[heart$];
    }
    set heart(value) {
      this[heart$] = value;
    }
    get coinCounter() {
      return this[coinCounter];
    }
    set coinCounter(value) {
      this[coinCounter] = value;
    }
    get maze() {
      return this[maze];
    }
    set maze(value) {
      this[maze] = value;
    }
    get game() {
      return this[game$];
    }
    set game(value) {
      this[game$] = value;
    }
    set marble(value) {
      this[_marble] = value;
    }
    get marble() {
      return this[_marble];
    }
    get level1() {
      return this[_level1];
    }
    loadParameter() {
      return async.async(dart.void, (function* loadParameter() {
        let level = null;
        yield html.HttpRequest.getString("gameConfig.json").then(dart.dynamic, dart.fn(json => {
          level = core.Map._check(convert.jsonDecode(json));
          if (dart.notNull(this.lvlCount) > 9) {
            this.lvlCount = 0;
          }
          this.level1 = core.String._check(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["lvlDesign"]), 'join', []));
          this.marble.startX = dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["playerStart"]), '_get', ["x"]))) * (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX)));
          this.marble.startY = dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["playerStart"]), '_get', ["y"]))) * (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY)));
          this.marble.setPosition(dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["playerStart"]), '_get', ["x"]))) * (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX))), dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["playerStart"]), '_get', ["y"]))) * (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY))));
          this.heart = new src__model.Heart.new(dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["heart"]), '_get', ["x"]))) * (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX))), dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["heart"]), '_get', ["y"]))) * (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY))), 1);
          this.coin = new src__model.Coin.new(dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["coin"]), '_get', ["x"]))) * (dart.notNull(src__model.globalX) * (dart.notNull(html.window.innerWidth) / dart.notNull(src__model.globalScaleX))), dart.notNull(core.double.as(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["coin"]), '_get', ["y"]))) * (dart.notNull(src__model.globalY) * (dart.notNull(html.window.innerHeight) / dart.notNull(src__model.globalScaleY))), core.int._check(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["coin"]), '_get', ["value"])));
          this.marble.view.coin[$innerHtml] = dart.str(dart.dsend(dart.dsend(dart.dsend(level[$_get]("level"), '_get', [this.lvlCount]), '_get', ["coin"]), '_get', ["value"]));
          this.marble.view.coin.style[$top] = dart.str(this.coin.y) + "px";
          this.marble.view.coin.style[$left] = dart.str(this.coin.x) + "px";
          this.marble.view.coinOn();
          this.marble.view.heart[$innerHtml] = "&#10084";
          this.marble.view.heart.style[$top] = dart.str(this.heart.y) + "px";
          this.marble.view.heart.style[$left] = dart.str(this.heart.x) + "px";
          this.marble.view.heartOn();
        }, StringToNull()));
        this.genField();
        this.loadMaze();
        this.lvlCount = dart.notNull(this.lvlCount) + 1;
        this.nextLvl = true;
      }).bind(this));
    }
    set level1(value) {
      this[_level1] = value;
    }
    genField() {
      let map = this.level1[$split]("");
      this.maze = ListOfListOfString().generate(this.sizeY, dart.fn(i => ListOfString().new(this.sizeX), intToListOfString()));
      for (let i = 0, k = 0; i < dart.notNull(this.maze[$length]); i = i + 1) {
        for (let j = 0; j < dart.notNull(this.maze[$_get](i)[$length]); j = j + 1, k = k + 1) {
          this.maze[$_get](i)[$_set](j, map[$_get](k));
        }
      }
    }
    loadMaze() {
      let txt = "";
      for (let i = 0; i < dart.notNull(this.maze[$length]); i = i + 1) {
        txt = txt + "<tr>";
        for (let j = 0; j < dart.notNull(this.maze[$_get](i)[$length]); j = j + 1) {
          txt = txt + ("<td headers='" + dart.str(this.maze[$_get](i)[$_get](j)) + "'></td>");
        }
        txt = txt + "</tr>";
      }
      this.game.style[$width] = dart.str(html.window.innerWidth) + "px";
      this.game.style[$height] = dart.str(html.window.innerHeight) + "px";
      this.game[$innerHtml] = txt;
      let temp = this.game[$querySelectorAll](html.Element, "#game td");
      for (let i of temp) {
        if (i[$getAttribute]("headers") === "1") {
          i.style[$backgroundImage] = "url(images/Stein.png)";
          i.style[$backgroundPosition] = "center";
          i.style[$backgroundSize] = "contain";
        }
        if (i[$getAttribute]("headers") === "2") {
          i.style[$backgroundImage] = "url(images/finish.png)";
          i.style[$backgroundPosition] = "center";
          i.style[$backgroundSize] = "contain";
          i.style[$backgroundRepeat] = "repeat";
        }
        if (i[$getAttribute]("headers") === "3") {
          i.style[$borderRight] = "1px solid #000000";
          i.style[$backgroundImage] = "url(images/Stein.png)";
          i.style[$backgroundPosition] = "center";
          i.style[$backgroundSize] = "contain";
        }
        if (i[$getAttribute]("headers") === "0") {
          i.style[$backgroundImage] = "url(images/Stein2.png)";
          i.style[$backgroundPosition] = "center";
          i.style[$backgroundSize] = "contain";
        }
      }
    }
    isCoin() {
      if ((dart.notNull(this.marble.x) - dart.notNull(this.coin.x))[$abs]()[$round]() <= 30 && (dart.notNull(this.marble.y) - dart.notNull(this.coin.y))[$abs]()[$round]() <= 30) {
        return true;
      }
      return false;
    }
    isHeart() {
      if ((dart.notNull(this.marble.x) - dart.notNull(this.heart.x))[$abs]()[$round]() <= 30 && (dart.notNull(this.marble.y) - dart.notNull(this.heart.y))[$abs]()[$round]() <= 30) {
        return true;
      }
      return false;
    }
    increaseLife(value) {
      let t0;
      t0 = this.marble;
      t0.life = dart.notNull(t0.life) + dart.notNull(value);
    }
  };
  (src__model.MarbleMaze.new = function(marble) {
    this[_marble] = null;
    this[coin$] = null;
    this[sizeX] = 20;
    this[sizeY] = 40;
    this[lvlCount] = 0;
    this[nextLvl] = false;
    this[heart$] = null;
    this[_level1] = "LEER";
    this[coinCounter] = 0;
    this[maze] = null;
    this[game$] = html.querySelector("#game");
    this.marble = marble;
  }).prototype = src__model.MarbleMaze.prototype;
  dart.addTypeTests(src__model.MarbleMaze);
  const coin$ = Symbol("MarbleMaze.coin");
  const sizeX = Symbol("MarbleMaze.sizeX");
  const sizeY = Symbol("MarbleMaze.sizeY");
  const lvlCount = Symbol("MarbleMaze.lvlCount");
  const nextLvl = Symbol("MarbleMaze.nextLvl");
  const heart$ = Symbol("MarbleMaze.heart");
  const coinCounter = Symbol("MarbleMaze.coinCounter");
  const maze = Symbol("MarbleMaze.maze");
  const game$ = Symbol("MarbleMaze.game");
  dart.setMethodSignature(src__model.MarbleMaze, () => ({
    __proto__: dart.getMethods(src__model.MarbleMaze.__proto__),
    loadParameter: dart.fnType(dart.void, []),
    genField: dart.fnType(dart.void, []),
    loadMaze: dart.fnType(dart.void, []),
    isCoin: dart.fnType(core.bool, []),
    isHeart: dart.fnType(core.bool, []),
    increaseLife: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__model.MarbleMaze, () => ({
    __proto__: dart.getGetters(src__model.MarbleMaze.__proto__),
    marble: src__model.Marble,
    level1: core.String
  }));
  dart.setSetterSignature(src__model.MarbleMaze, () => ({
    __proto__: dart.getSetters(src__model.MarbleMaze.__proto__),
    marble: src__model.Marble,
    level1: core.String
  }));
  dart.setLibraryUri(src__model.MarbleMaze, "package:demo/src/model.dart");
  dart.setFieldSignature(src__model.MarbleMaze, () => ({
    __proto__: dart.getFields(src__model.MarbleMaze.__proto__),
    [_marble]: dart.fieldType(src__model.Marble),
    coin: dart.fieldType(src__model.Coin),
    sizeX: dart.fieldType(core.int),
    sizeY: dart.fieldType(core.int),
    lvlCount: dart.fieldType(core.int),
    nextLvl: dart.fieldType(core.bool),
    heart: dart.fieldType(src__model.Heart),
    [_level1]: dart.fieldType(core.String),
    coinCounter: dart.fieldType(core.int),
    maze: dart.fieldType(core.List$(core.List$(core.String))),
    game: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__model, {
    /*src__model.globalX*/get globalX() {
      return 21;
    },
    set globalX(_) {},
    /*src__model.globalY*/get globalY() {
      return 18;
    },
    set globalY(_) {},
    /*src__model.globalScaleX*/get globalScaleX() {
      return 414;
    },
    set globalScaleX(_) {},
    /*src__model.globalScaleY*/get globalScaleY() {
      return 736;
    },
    set globalScaleY(_) {}
  });
  dart.trackLibraries("packages/demo/src/model", {
    "package:demo/src/view.dart": src__view,
    "package:demo/src/model.dart": src__model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/demo/src/view.dart","org-dartlang-app:///packages/demo/src/model.dart"],"names":[],"mappings":"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","file":"model.ddc.js"}');
  // Exports:
  return {
    src__view: src__view,
    src__model: src__model
  };
});

//# sourceMappingURL=model.ddc.js.map
