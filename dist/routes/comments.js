"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentsController = _interopRequireDefault(require("../controllers/commentsController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentRouter = _express["default"].Router();

commentRouter.post('/add/:_id', _commentsController["default"].addComment);
commentRouter.get('/getAll', _commentsController["default"].getComments);
commentRouter.get('/getOne/:_id', _commentsController["default"].getCommentById);
commentRouter["delete"]('/delete/:_id', _commentsController["default"].deleteComment);
var _default = commentRouter;
exports["default"] = _default;