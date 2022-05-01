"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function validateUserData(data) {
  var JoiSchema = _joi["default"].object({
    names: _joi["default"].string().min(3).required(),
    email: _joi["default"].string().email().min(5).required(),
    password: _joi["default"].string().min(6).required()
  });

  return JoiSchema.validate(data);
}

function validateUserModData(data) {
  var JoiSchema = _joi["default"].object({
    names: _joi["default"].string().min(3),
    email: _joi["default"].string().email().min(5)
  });

  return JoiSchema.validate(data);
}

function validateMsgData(data) {
  var JoiSchema = _joi["default"].object({
    name: _joi["default"].string().min(3).optional(),
    email: _joi["default"].string().email().min(5).required(),
    msg: _joi["default"].string().min(5).required()
  }).options({
    abortEarly: false
  });

  return JoiSchema.validate(data);
}

function validateSignin(user) {
  var schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().required()
  });

  return schema.validate(user);
}

;
var _default = {
  validateUserData: validateUserData,
  validateUserModData: validateUserModData,
  validateMsgData: validateMsgData,
  validateSignin: validateSignin
};
exports["default"] = _default;