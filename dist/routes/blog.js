"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blogController = _interopRequireDefault(require("../controllers/blogController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postRouter = _express["default"].Router();

postRouter.post('/post', _blogController["default"].posts);
postRouter.get('/getAll', _blogController["default"].getAll);
postRouter.get('/getOne/:_id', _blogController["default"].getOne);
postRouter.patch('/updatePost/:_id', _blogController["default"].updatePost);
postRouter["delete"]('/deletePost/:_id', _blogController["default"].deletePost);
var _default = postRouter;
exports["default"] = _default;