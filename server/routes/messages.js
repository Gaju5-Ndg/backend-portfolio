import express from "express";

const messagesRouter = express.Router();
import {
  getAllMsgs,
  getMsgById,
  createMsg,
  deleteMsg,
} from "../controllers/messagesController.js";

// get all messages
messagesRouter.get("/getAll", getAllMsgs);

// get specific message by ID
messagesRouter.get("/getOne/:_id", getMsgById);

// create message by ID
messagesRouter.post("/sendMessage", createMsg);

// delete message by ID
messagesRouter.delete("/deletemsg/:_id", deleteMsg);

export default messagesRouter;
