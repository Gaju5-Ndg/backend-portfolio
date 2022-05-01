import messageModel from "../models/db/messages.js";
import validation from '../helpers/validation.js'

const getAllMsgs = async (req, res) => {
  const messageData = await messageModel.find();
  res.status(200).json({
    status: 200,
    results: messageData
  });
};

const getMsgById = async (req, res) => {
  let id = req.params.id;
  messageModel
    .findById(id)
    .then((result) => {
      res.status(200).json({
        status: 200,
        results: result
      });
    })
    .catch((err) => {
      res.status(404).json({ msg: "no message available" });
    });
};

const createMsg = async (req, res) => {
  let newMsg = {};
  newMsg.name = req.body.name;
  newMsg.email = req.body.email;
  newMsg.msg = req.body.msg;
  let response = validation.validateMsgData(req.body);
  if (response.error) {
    let errors = [];
    response.error.details.map((err) => errors.push(err.message));
    res.status(400).json({ msg: "Validation error", errors });
    return;
  }
  const msg = new messageModel(newMsg);
  const msgData = await msg.save();
  res.status(201).json({ msg: "Message added", msgData });
};

const deleteMsg = async (req, res) => {
  let id = req.params._id;
  try {
    let found = await messageModel.findByIdAndDelete(id);
    if (found !== null) {
      return res.status(404).json({ msg: "message deleted" });
    }
    res.status(204).send();
  } catch (e) {
    return res.status(404).json({ msg: "no message to delete" });
  }
};



export { getAllMsgs, getMsgById, createMsg, deleteMsg };
