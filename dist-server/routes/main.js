"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _nedb = _interopRequireDefault(require("nedb"));

var _babelCore = require("babel-core");

var _babelPolyfill = _interopRequireDefault(require("babel-polyfill"));

var _UsersRepository = _interopRequireDefault(require("../repository/UsersRepository"));

var _ValidateUser = _interopRequireDefault(require("../utilities/ValidateUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var repository = new _UsersRepository["default"]();
var validation = new _ValidateUser["default"]();

var main = _express["default"].Router();

main.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return repository.find(req.query);

          case 3:
            results = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.json({
              success: false,
              users: [],
              count: 0,
              message: _context.t0
            }));

          case 9:
            return _context.abrupt("return", res.json({
              success: true,
              users: results,
              count: results.length,
              message: ''
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
main.get('/users/:userId', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return repository.find({
              '_id': req.params.userId
            });

          case 3:
            results = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.json({
              success: false,
              users: [],
              count: 0,
              message: _context2.t0
            }));

          case 9:
            return _context2.abrupt("return", res.json({
              success: true,
              users: results,
              count: results.length,
              message: ''
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
main.post('/', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var results, entity;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return validation.validateUsers(req.body);

          case 3:
            entity = _context3.sent;
            _context3.next = 6;
            return repository.insertObj(entity);

          case 6:
            results = _context3.sent;
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log('err', _context3.t0);
            return _context3.abrupt("return", res.json({
              success: false,
              message: _context3.t0
            }));

          case 13:
            return _context3.abrupt("return", res.json({
              success: true,
              entry: {
                id: results._id,
                uri: "http://localhost:3000/users/".concat(results._id)
              }
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = main;
exports["default"] = _default;