var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
define(['require', 'exports', 'dependency'], function(require, exports, dependency_1) {
  'use strict'
  Object.defineProperty(exports, '__esModule', { value: true })
  exports.testDependency = exports.test = void 0
  dependency_1 = __importDefault(dependency_1)
  exports.test = 'success'
  exports.testDependency = dependency_1.default
  exports.default = exports.test
})
