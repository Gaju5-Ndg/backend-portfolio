"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _blog = _interopRequireDefault(require("../models/db/blog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var adminController = /*#__PURE__*/function () {
  function adminController() {
    _classCallCheck(this, adminController);
  }

  _createClass(adminController, null, [{
    key: "posts",
    value: function () {
      var _posts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var Data, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Data = new _blog["default"]({
                  title: req.body.title,
                  content: req.body.content
                });
                _context.prev = 1;
                _context.next = 4;
                return Data.save();

              case 4:
                data = _context.sent;
                res.status(200).json(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                res.status(400).json({
                  message: _context.t0.message
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function posts(_x, _x2) {
        return _posts.apply(this, arguments);
      }

      return posts;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var Data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _blog["default"].find({});

              case 2:
                Data = _context2.sent;
                res.status(200).json({
                  status: 200,
                  data: Data
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll(_x3, _x4) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getOne",
    value: function () {
      var _getOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var Data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _blog["default"].findById(req.params._id);

              case 3:
                Data = _context3.sent;
                res.send(Data);
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                res.status(400).json({
                  message: _context3.t0.message
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getOne(_x5, _x6) {
        return _getOne.apply(this, arguments);
      }

      return getOne;
    }()
  }, {
    key: "deletePost",
    value: function () {
      var _deletePost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, Data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params._id;
                _context4.next = 4;
                return _blog["default"].findByIdAndDelete(id);

              case 4:
                Data = _context4.sent;
                res.send("blog with ".concat(Data.title, " user  has been deleted.."));
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                res.status(400).json({
                  message: _context4.t0.message
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      function deletePost(_x7, _x8) {
        return _deletePost.apply(this, arguments);
      }

      return deletePost;
    }()
  }, {
    key: "updatePost",
    value: function () {
      var _updatePost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!req.body) {
                  res.status(400).send({
                    message: "Data to update can not be empty!"
                  });
                }

                id = req.params._id;
                _context5.next = 4;
                return _blog["default"].findByIdAndUpdate(id, req.body, {
                  useFindAndModify: false
                }).then(function (data) {
                  if (!data) {
                    res.status(404).send({
                      message: "blog not found."
                    });
                  } else {
                    res.send({
                      message: "blog updated successfully."
                    });
                  }
                })["catch"](function (err) {
                  res.status(500).send({
                    message: err.message
                  });
                });

              case 4:
                data = _context5.sent;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updatePost(_x9, _x10) {
        return _updatePost.apply(this, arguments);
      }

      return updatePost;
    }()
  }]);

  return adminController;
}();

var _default = adminController;
exports["default"] = _default;