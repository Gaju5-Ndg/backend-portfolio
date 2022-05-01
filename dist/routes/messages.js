"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messagesController = require("../controllers/messagesController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messagesRouter = _express["default"].Router();

// get all messages
messagesRouter.get("/getAll", _messagesController.getAllMsgs); // get specific message by ID

messagesRouter.get("/getOne/:_id", _messagesController.getMsgById); // create message by ID

messagesRouter.post("/sendMessage", _messagesController.createMsg); // delete message by ID

messagesRouter["delete"]("/deletemsg/:_id", _messagesController.deleteMsg);
var _default = messagesRouter;
exports["default"] = _default;