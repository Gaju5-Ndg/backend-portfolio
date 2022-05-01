"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.js"));

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _dbConfig = _interopRequireDefault(require("./config/db.config.js"));

var _user = _interopRequireDefault(require("./routes/user.js"));

var _blog = _interopRequireDefault(require("./routes/blog.js"));

var _messages = _interopRequireDefault(require("./routes/messages.js"));

var _comments = _interopRequireDefault(require("./routes/comments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use('/api/users', _user["default"]);
app.use('/api/post', _blog["default"]);
app.use('/api/message', _messages["default"]);
app.use('/api/comment', _comments["default"]);
app.use('/api/port', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.listen(3000, function () {
  console.log("Server Started at ".concat(3000));
});
(0, _dbConfig["default"])();
var _default = app;
exports["default"] = _default;