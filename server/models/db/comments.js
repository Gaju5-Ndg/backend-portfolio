import mongoose from "mongoose";

const schema = mongoose.Schema({
  postId: String,
  author: String,
  desc: String,
  "replied-at": { type: Date, default: new Date() },
});

export default  mongoose.model('Comment', schema)
