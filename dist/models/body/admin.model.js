"use strict";

var updatePost = function updatePost(req) {
  var update = {
    title: req.body.title,
    content: req.body.content
  };
  return update;
};

var deletePost = function deletePost(req) {
  var erase = {
    _id: req.query.id
  };
  return erase;
};

module.exports = {
  updatePost: updatePost,
  deletePost: deletePost
};