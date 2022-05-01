"use strict";

var createUser = function createUser(req) {
  var createUser = {
    email: req.body.email,
    names: req.body.names,
    password: req.body.password
  };
  return createUser;
};

module.exports = {
  createUser: createUser
};