var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  }
  else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "dependency"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.testDependency = exports.test = void 0;
  const dependency_1 = __importDefault(require("dependency"));
  exports.test = 'success';
  exports.testDependency = dependency_1.default;
  exports.default = exports.test;
});