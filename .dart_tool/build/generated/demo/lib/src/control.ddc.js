define(['dart_sdk', 'packages/demo/src/model'], function(dart_sdk, model) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = model.src__model;
  const src__view = model.src__view;
  const src__control = Object.create(dart.library);
  const $onClick = dartx.onClick;
  const $onDeviceOrientation = dartx.onDeviceOrientation;
  const $onKeyDown = dartx.onKeyDown;
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let MouseEventToFutureOfNull = () => (MouseEventToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [html.MouseEvent])))();
  let DeviceOrientationEventToNull = () => (DeviceOrientationEventToNull = dart.constFn(dart.fnType(core.Null, [html.DeviceOrientationEvent])))();
  let KeyboardEventToNull = () => (KeyboardEventToNull = dart.constFn(dart.fnType(core.Null, [html.KeyboardEvent])))();
  const _mobile = dart.privateName(src__control, "_mobile");
  src__control.GameController = class GameController extends core.Object {
    get marbleMazeGame() {
      return this[marbleMazeGame];
    }
    set marbleMazeGame(value) {
      this[marbleMazeGame] = value;
    }
    get marble() {
      return this[marble];
    }
    set marble(value) {
      this[marble] = value;
    }
    startGame() {
      return async.async(dart.dynamic, (function* startGame() {
        html.querySelector("#startbutton")[$onClick].listen(dart.fn(_ => async.async(core.Null, (function*() {
          src__control._over = false;
          src__control.GameController.view.hideStartButton();
          yield this.marbleMazeGame.loadParameter();
          src__control.GameController.view.update(this.marbleMazeGame);
          this.loadDesktopKeyListener();
          this.loadDeviceOrientationListener();
        }).bind(this)), MouseEventToFutureOfNull()));
      }).bind(this));
    }
    test() {
      let t0;
      if (dart.test(this.marbleMazeGame.isHeart()) && dart.equals(src__control._over, false)) {
        src__control.GameController.view.heartOff();
        this.marbleMazeGame.increaseLife(this.marbleMazeGame.heart.value);
        this.marbleMazeGame.heart.value = 0;
      }
      if (dart.test(this.marbleMazeGame.isCoin()) && dart.equals(src__control._over, false)) {
        src__control.GameController.view.coinOff();
        t0 = this.marbleMazeGame;
        t0.coinCounter = dart.notNull(t0.coinCounter) + dart.notNull(this.marbleMazeGame.coin.value);
        this.marbleMazeGame.coin.value = 0;
      }
      if (this.marbleMazeGame.marble.life === 0 && dart.equals(src__control._over, false)) {
        this.marble.resetModel();
        src__control.GameController.view.showStartButton();
        src__control._over = true;
      }
      if (this.marbleMazeGame.lvlCount === 10) {
        this.marble.view.winnerWinnerChickenDinnner(this.marbleMazeGame.coinCounter);
        src__control._over = true;
      }
    }
    loadDeviceOrientationListener() {
      html.window[$onDeviceOrientation].listen(dart.fn(ev => {
        if (dart.equals(src__control._over, false)) {
          this[_mobile] = true;
          if (dart.equals(src__control._over, false)) {
            let dy = (math.min(core.num, 50, math.max(core.num, 10, ev.beta)) - 30) / 4;
            let dx = math.min(core.num, 20, math.max(core.num, -20, ev.gamma)) / 4;
            this.marbleMazeGame.marble.move(dx, dy);
            this.test();
            src__control.GameController.view.update(this.marbleMazeGame);
          }
        }
      }, DeviceOrientationEventToNull()));
    }
    loadDesktopKeyListener() {
      if (dart.equals(this[_mobile], false) && dart.equals(src__control._over, false)) {
        html.window[$onKeyDown].listen(dart.fn(e => {
          if (dart.equals(src__control._over, false)) {
            if (e.keyCode == html.KeyCode.LEFT || e.keyCode == html.KeyCode.A) this.marbleMazeGame.marble.move(-10.0, 0.0);
            if (e.keyCode == html.KeyCode.RIGHT || e.keyCode == html.KeyCode.D) this.marbleMazeGame.marble.move(10.0, 0.0);
            if (e.keyCode == html.KeyCode.UP || e.keyCode == html.KeyCode.W) this.marbleMazeGame.marble.move(0.0, -10.0);
            if (e.keyCode == html.KeyCode.DOWN || e.keyCode == html.KeyCode.S) this.marbleMazeGame.marble.move(0.0, 10.0);
            this.test();
            src__control.GameController.view.update(this.marbleMazeGame);
          }
        }, KeyboardEventToNull()));
      }
    }
  };
  (src__control.GameController.new = function() {
    this[marbleMazeGame] = null;
    this[marble] = new src__model.Marble.new(src__control.GameController.view);
    this[_mobile] = false;
    this.marbleMazeGame = new src__model.MarbleMaze.new(this.marble);
    this.marble.marbleMaze = this.marbleMazeGame;
  }).prototype = src__control.GameController.prototype;
  dart.addTypeTests(src__control.GameController);
  const marbleMazeGame = Symbol("GameController.marbleMazeGame");
  const marble = Symbol("GameController.marble");
  dart.setMethodSignature(src__control.GameController, () => ({
    __proto__: dart.getMethods(src__control.GameController.__proto__),
    startGame: dart.fnType(dart.dynamic, []),
    test: dart.fnType(dart.dynamic, []),
    loadDeviceOrientationListener: dart.fnType(dart.dynamic, []),
    loadDesktopKeyListener: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(src__control.GameController, "package:demo/src/control.dart");
  dart.setFieldSignature(src__control.GameController, () => ({
    __proto__: dart.getFields(src__control.GameController.__proto__),
    marbleMazeGame: dart.fieldType(src__model.MarbleMaze),
    marble: dart.fieldType(src__model.Marble),
    [_mobile]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__control.GameController, {
    /*src__control.GameController.view*/get view() {
      return new src__view.MarbleView.new();
    }
  });
  dart.defineLazy(src__control, {
    /*src__control._over*/get _over() {
      return false;
    },
    set _over(_) {}
  });
  dart.trackLibraries("packages/demo/src/control", {
    "package:demo/src/control.dart": src__control
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/demo/src/control.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAWa;;;;;;IACJ;;;;;;;AAQE;QACP,AAA8B,AAAQ,mBAAxB,iCAA+B,QAAC;UAC5C,qBAAQ;UACR,AAAK;UACL,MAAM,AAAe;UACrB,AAAK,wCAAO;UACZ;UACA;QACD;MACH;;;;AAIE,oBAAI,AAAe,kCAAmB,YAAN,oBAAS;QACvC,AAAK;QACL,AAAe,iCAAa,AAAe,AAAM;QACjD,AAAe,AAAM,kCAAQ;;AAE/B,oBAAI,AAAe,iCAAkB,YAAN,oBAAS;QACtC,AAAK;aACL;QAAe,iBAAY,aAAZ,+BAAe,AAAe,AAAK;QAClD,AAAe,AAAK,iCAAQ;;AAE9B,UAAI,AAAe,AAAO,AAAK,oCAAG,KAAW,YAAN,oBAAS;QAC9C,AAAO;QACP,AAAK;QACL,qBAAQ;;AAEV,UAAG,AAAe,AAAQ,iCAAE;QAC1B,AAAO,AAAK,4CAA2B,AAAe;QACtD,qBAAQ;;IAEZ;;MAME,AAAO,AAAoB,yCAAO,QAAC;AACjC,YAAU,YAAN,oBAAS;UACX,gBAAU;AACV,cAAU,YAAN,oBAAS;AACL,qBAAsC,CAAhC,AAA0B,mBAAtB,IAAI,mBAAI,IAAI,AAAG,EAAD,UAAU,MAAM;AACxC,qBAAM,AAA6B,mBAAzB,IAAI,mBAAI,CAAC,IAAI,AAAG,EAAD,WAAY;YAC3C,AAAe,AAAO,gCAAK,EAAE,EAAE,EAAE;YACjC;YACA,AAAK,wCAAO;;;;IAIpB;;AAWE,UAAY,YAAR,eAAW,UAAe,YAAN,oBAAS;QAE/B,AAAO,AAAU,+BAAO,QAAe;AACrC,cAAU,YAAN,oBAAS;AACX,gBAAK,AAAE,AAAQ,CAAT,YAAoB,qBAAQ,AAAE,AAAQ,CAAT,YAAoB,gBACrD,AAAe,AAAO,gCAAK,OAAK;AAElC,gBAAK,AAAE,AAAQ,CAAT,YAAoB,sBAAS,AAAE,AAAQ,CAAT,YAAoB,gBACtD,AAAe,AAAO,gCAAK,MAAI;AAEjC,gBAAK,AAAE,AAAQ,CAAT,YAAoB,mBAAM,AAAE,AAAQ,CAAT,YAAoB,gBACnD,AAAe,AAAO,gCAAK,KAAG;AAEhC,gBAAK,AAAE,AAAQ,CAAT,YAAoB,qBAAQ,AAAE,AAAQ,CAAT,YAAoB,gBACrD,AAAe,AAAO,gCAAK,KAAG;YAEhC;YACA,AAAK,wCAAO;;;;IAIpB;;;IA3FW;IACJ,eAAa,0BAAO;IACvB,gBAAU;IAGZ,sBAAqB,8BAAW;IAChC,AAAO,yBAAa;EACtB;;;;;;;;;;;;;;;;;;;MARa,gCAAI;YAAO;;;;MAHtB,kBAAK;YAAG","file":"control.ddc.js"}');
  // Exports:
  return {
    src__control: src__control
  };
});

//# sourceMappingURL=control.ddc.js.map
