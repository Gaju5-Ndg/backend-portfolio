"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function generateToken(user) {
  return _jsonwebtoken["default"].sign({
    user: user
  }, ' api', {
    expiresIn: '30d'
  });
}

function hashpassword(password) {
  return _bcrypt["default"].hashSync(password, 10);
}

function comparePassword(password, hashedPassword) {
  return _bcrypt["default"].compareSync(password, hashedPassword);
}

var _default = {
  generateToken: generateToken,
  hashpassword: hashpassword,
  comparePassword: comparePassword
};
exports["default"] = _default;