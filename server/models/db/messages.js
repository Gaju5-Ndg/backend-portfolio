import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  email: String,
  msg: String,
  date: { type: Date, default: new Date() },
});

export default mongoose.model("Message", schema);
