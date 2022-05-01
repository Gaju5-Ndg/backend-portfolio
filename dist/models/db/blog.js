"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dataSchema = new _mongoose["default"].Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
});

var _default = _mongoose["default"].model('data', dataSchema);

exports["default"] = _default;