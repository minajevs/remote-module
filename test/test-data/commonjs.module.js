"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDependency = exports.test = void 0;
const dependency_1 = __importDefault(require("dependency"));
exports.test = 'success';
exports.testDependency = dependency_1.default;
exports.default = exports.test;