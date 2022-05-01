"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userModel = _interopRequireDefault(require("../models/db/userModel.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validation = _interopRequireDefault(require("../helpers/validation.js"));

var _authentication = _interopRequireDefault(require("../helpers/authentication.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userController = /*#__PURE__*/function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: "signup",
    value: function signup(req, res) {
      var _req$body = req.body,
          email = _req$body.email,
          password = _req$body.password,
          names = _req$body.names,
          role = _req$body.role;
      var lowEmail = email.toLowerCase();

      var _validation$validateU = _validation["default"].validateUserData(req.body),
          error = _validation$validateU.error;

      if (error) {
        return res.status(400).json({
          message: error.details[0].message.replace(/"/g, ''),
          status: 400
        });
      }

      var hashpassword = _authentication["default"].hashpassword(password);

      _userModel["default"].find({
        email: lowEmail
      }, function (error, result) {
        if (result.length) {
          return res.status(201).json({
            error: 'This Email already exist, please use another email',
            status: 201
          });
        }

        var user = new _userModel["default"]({
          _id: new _mongoose["default"].Types.ObjectId(),
          names: names,
          email: lowEmail,
          role: role,
          password: hashpassword
        });
        user.save().then(function () {
          res.status(201).json({
            message: 'User Created Successfully',
            status: 201
          });
        })["catch"](function (err) {
          res.status(500).json({
            message: 'oh no, there is something wrong, check your internet or call support',
            status: 500
          });
        });
      });
    }
  }, {
    key: "signin",
    value: function signin(req, res) {
      var _req$body2 = req.body,
          email = _req$body2.email,
          password = _req$body2.password;

      var _validation$validateS = _validation["default"].validateSignin(req.body),
          error = _validation$validateS.error;

      if (error) {
        return res.status(401).json({
          message: error.details[0].message.replace(/"/g, ''),
          status: 401
        });
      }

      _userModel["default"].find({
        email: email
      }, function (error, result) {
        if (result.length) {
          var compared = _authentication["default"].comparePassword(password, result[0].password);

          if (compared) {
            res.status(200).json({
              message: 'You are signed in successfully',
              status: 200,
              token: _authentication["default"].generateToken(result[0])
            });
          } else {
            res.status(401).json({
              message: 'SignIn Failed',
              status: 401
            });
          }
        } else {
          return res.status(401).json({
            status: 401,
            message: 'SignIn Failed'
          });
        }
      });
    }
  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var users;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _userModel["default"].find({});

              case 2:
                users = _context.sent;
                res.status(200).json({
                  status: 200,
                  data: users
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAllUsers(_x, _x2) {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: "updateProfile",
    value: function updateProfile(req, res) {
      var id = req.params._id.id;
      var _req$body3 = req.body,
          names = _req$body3.names,
          email = _req$body3.email;
      var error = _validation["default"].validateUserModData.error;

      if (error) {
        return res.status(400).json({
          message: error.details[0].message.replace(/"/g, ''),
          status: 400
        });
      }

      _userModel["default"].findByIdAndUpdate(id, {
        names: names,
        email: email
      }, function (err, result) {
        if (result) {
          res.status(409).json({
            message: 'user updated',
            user: result
          });
          console.log(result);
        }
      });
    }
  }]);

  return userController;
}();

_defineProperty(userController, "deleteUser", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, deleted;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params._id.id;
            _context2.next = 3;
            return _userModel["default"].findByIdAndDelete(id);

          case 3:
            deleted = _context2.sent;

            if (!deleted) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              status: 203,
              message: "user is deleted successfully"
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());

var _default = userController;
exports["default"] = _default;