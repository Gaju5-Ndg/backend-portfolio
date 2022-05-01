"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import joi from "joi";
var userSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    "enum": ["user", "admin"],
    "default": "user"
  }
});

var _default = _mongoose["default"].model('User', userSchema);

exports["default"] = _default;