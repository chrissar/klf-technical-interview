"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nedb = _interopRequireDefault(require("nedb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = new _nedb["default"]({
  filename: __dirname + '/../db/users.db',
  autoload: true
});
var _default = users;
exports["default"] = _default;