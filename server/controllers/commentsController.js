import comments from '../models/db/comments.js';


class commentController{

static addComment = (req, res) => {
    let id = req.params._id;
    let newComment = {};

    newComment.author = req.body.author;
    newComment.desc = req.body.desc;
    newComment.postId = id;

    if (Object.keys(req.body).length=== 0) {
      return res.status(409).json({ msg: "provide data" });
    }
    const comment = new comments(newComment);
    comment.save().then((data) => {
      res.status(200).json({ msg: "Comment Added Successfully", data });
      
    });
  };
  
  static getComments = (req, res) => {
    let id = req.params._id;
    comments.find({})
    .then((result) => {
      res.status(200).json(result);
    });
  };
  
  static getCommentById = (req, res) => {
    let cid = req.params.cid;
    let id = req.params.id;
    comments
      .findOne({ _id: cid, postId: id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(404).json({ msg: "not found" });
      });
  };
  
  static deleteComment = (req, res) => {
    let cid = req.params.cid;
    comments
      .findByIdAndDelete(cid)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        res.status(404).json({ msg: "comment not deleted" });
      });
  };
  
  static updateComment = async (req, res) => {
    let cid = req.params.cid;
    if (Object.keys(req.body).length == 0) {
      return res.status(409).json({ msg: "provide comment" });
    }
    comments
      .findByIdAndUpdate(cid, { ...req.body })
      .then((result) => {
        res.status(200).json({ msg: "comment updated" });
      })
      .catch((err) => {
        res.status(404).json({ msg: "Comment not updated" });
      });
  };
}
export default commentController;