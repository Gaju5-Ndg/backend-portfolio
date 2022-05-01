"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgById = exports.getAllMsgs = exports.deleteMsg = exports.createMsg = void 0;

var _messages = _interopRequireDefault(require("../models/db/messages.js"));

var _validation = _interopRequireDefault(require("../helpers/validation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllMsgs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var messageData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _messages["default"].find();

          case 2:
            messageData = _context.sent;
            res.status(200).json({
              status: 200,
              results: messageData
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllMsgs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllMsgs = getAllMsgs;

var getMsgById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;

            _messages["default"].findById(id).then(function (result) {
              res.status(200).json({
                status: 200,
                results: result
              });
            })["catch"](function (err) {
              res.status(404).json({
                msg: "no message available"
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMsgById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMsgById = getMsgById;

var createMsg = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var newMsg, response, errors, msg, msgData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            newMsg = {};
            newMsg.name = req.body.name;
            newMsg.email = req.body.email;
            newMsg.msg = req.body.msg;
            response = _validation["default"].validateMsgData(req.body);

            if (!response.error) {
              _context3.next = 10;
              break;
            }

            errors = [];
            response.error.details.map(function (err) {
              return errors.push(err.message);
            });
            res.status(400).json({
              msg: "Validation error",
              errors: errors
            });
            return _context3.abrupt("return");

          case 10:
            msg = new _messages["default"](newMsg);
            _context3.next = 13;
            return msg.save();

          case 13:
            msgData = _context3.sent;
            res.status(201).json({
              msg: "Message added",
              msgData: msgData
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createMsg(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createMsg = createMsg;

var deleteMsg = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, found;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params._id;
            _context4.prev = 1;
            _context4.next = 4;
            return _messages["default"].findByIdAndDelete(id);

          case 4:
            found = _context4.sent;

            if (!(found !== null)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              msg: "message deleted"
            }));

          case 7:
            res.status(204).send();
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(404).json({
              msg: "no message to delete"
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));

  return function deleteMsg(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteMsg = deleteMsg;