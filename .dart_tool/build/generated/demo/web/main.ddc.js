define(['dart_sdk', 'packages/demo/src/control'], function(dart_sdk, control) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__control = control.src__control;
  const main = Object.create(dart.library);
  main.main = function() {
    let controller = new src__control.GameController.new();
    controller.startGame();
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
<<<<<<< HEAD
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///web/main.dart"],"names":[],"mappings":";;;;;;;;AAGiB,qBAAiB;IAChC,AAAW,UAAD;EACZ","file":"main.ddc.js"}');
=======
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///web/main.dart"],"names":[],"mappings":";;;;;;;;AAIiB,qBAAiB;IAChC,AAAW,UAAD;EACZ","file":"main.ddc.js"}');
>>>>>>> 257a8de146cc709328adce199fe3c75cc944aa53
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
