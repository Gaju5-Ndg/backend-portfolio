"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post('/signup', _userController["default"].signup);
userRouter.post('/signin', _userController["default"].signin);
userRouter.get('/getAll', _userController["default"].getAllUsers); // router.get('/getOne/:_id', userController.getOne)

userRouter.patch('/update/:_id', _userController["default"].updateProfile);
userRouter["delete"]('/delete/:_id', _userController["default"].deleteUser);
var _default = userRouter;
exports["default"] = _default;