"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema({
  postId: String,
  author: String,
  desc: String,
  "replied-at": {
    type: Date,
    "default": new Date()
  }
});

var _default = _mongoose["default"].model('Comment', schema);

exports["default"] = _default;