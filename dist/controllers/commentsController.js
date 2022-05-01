"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _comments = _interopRequireDefault(require("../models/db/comments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commentController = /*#__PURE__*/_createClass(function commentController() {
  _classCallCheck(this, commentController);
});

_defineProperty(commentController, "addComment", function (req, res) {
  var id = req.params._id;
  var newComment = {};
  newComment.author = req.body.author;
  newComment.desc = req.body.desc;
  newComment.postId = id;

  if (Object.keys(req.body).length === 0) {
    return res.status(409).json({
      msg: "provide data"
    });
  }

  var comment = new _comments["default"](newComment);
  comment.save().then(function (data) {
    res.status(200).json({
      msg: "Comment Added Successfully",
      data: data
    });
  });
});

_defineProperty(commentController, "getComments", function (req, res) {
  var id = req.params._id;

  _comments["default"].find({}).then(function (result) {
    res.status(200).json(result);
  });
});

_defineProperty(commentController, "getCommentById", function (req, res) {
  var cid = req.params.cid;
  var id = req.params.id;

  _comments["default"].findOne({
    _id: cid,
    postId: id
  }).then(function (result) {
    res.status(200).json(result);
  })["catch"](function (err) {
    res.status(404).json({
      msg: "not found"
    });
  });
});

_defineProperty(commentController, "deleteComment", function (req, res) {
  var cid = req.params.cid;

  _comments["default"].findByIdAndDelete(cid).then(function () {
    res.status(204).send();
  })["catch"](function (err) {
    res.status(404).json({
      msg: "comment not deleted"
    });
  });
});

_defineProperty(commentController, "updateComment", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var cid;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cid = req.params.cid;

            if (!(Object.keys(req.body).length == 0)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              msg: "provide comment"
            }));

          case 3:
            _comments["default"].findByIdAndUpdate(cid, _objectSpread({}, req.body)).then(function (result) {
              res.status(200).json({
                msg: "comment updated"
              });
            })["catch"](function (err) {
              res.status(404).json({
                msg: "Comment not updated"
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

var _default = commentController;
exports["default"] = _default;