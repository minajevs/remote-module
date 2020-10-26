System.register(["dependency"], function (exports_1, context_1) {
  "use strict";
  var dependency_1, test, testDependency;
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [
      function (dependency_1_1) {
        dependency_1 = dependency_1_1;
      }
    ],
    execute: function () {
      exports_1("test", test = 'success');
      exports_1("testDependency", testDependency = dependency_1.default);
      exports_1("default", test);
    }
  };
});