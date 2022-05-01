"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _faker = require("@faker-js/faker");

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import users from '../models/db/userModel';
// import auth from '../helpers/authenticate';
_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('Testing the Whole API', function () {
  describe('Testing the whole signup feature and its messages', function () {
    var newUser = {
      names: _faker.faker.name.findName(),
      email: _faker.faker.internet.email(),
      password: 'password1'
    };
    var newUser2 = {
      names: 'test1',
      email: 'test@test.com',
      password: 'password'
    };
    var newUser3 = {
      names: 'test2',
      email: 'test2@test',
      password: 'password'
    };
    it('Should create new signup', function (done) {
      _chai["default"].request(_index["default"]).post('/api/users/signup').send(newUser).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message', 'User Created Successfully');
        done();
      });
    });
    it('Should not create user if email exists', function (done) {
      _chai["default"].request(_index["default"]).post('/api/users/signup').send(newUser2).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.have.property('error', 'This Email already exist, please use another email');
        done();
      });
    });
    it('Should not create the user if there is validation error', function (done) {
      _chai["default"].request(_index["default"]).post('/api/users/signup').send(newUser3).end(function (err, res) {
        res.should.have.status(400);
        res.should.have.be.a('object');
        done();
      });
    });
  });
});
describe('Testing the whole signin endpoint', function () {
  var newUser = {
    names: 'Test',
    email: 'testion@test.com',
    password: 'password'
  };
  var user2 = {
    email: 'notest@notest.com',
    password: 'password'
  };
  var user3 = {
    email: 'test@test.com',
    password: 'password'
  };
  var user4 = {
    email: 'test',
    password: 'password'
  }; // it('Should create new signup', done => {
  //   chai
  //     .request(app)
  //     .post('/api/users/signup')
  //     .send(newUser)
  //     .end((err, res) => {
  //       res.should.have.status(201);
  //       res.body.should.be.a('object');
  //       res.body.should.have.property('message', 'User Created Successfully');
  //       done();
  //     });
  // });

  it('Should Signin a user with an account', function (done) {
    _chai["default"].request(_index["default"]).post('/api/users/signin').send({
      email: newUser.email,
      password: newUser.password
    }).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('token');
      res.body.should.have.property('message', 'You are signed in successfully');
      done();
    });
  });
  it('Should not Sign In if there is validation error', function (done) {
    _chai["default"].request(_index["default"]).post('/api/users/signin').send(user4).end(function (err, res) {
      res.should.have.status(401);
      res.should.have.be.a('object');
      done();
    });
  });
  it('Should not signin a user if Authentication failed', function (done) {
    _chai["default"].request(_index["default"]).post('/api/users/signin').send(user3).end(function (err, res) {
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('message', 'SignIn Failed');
      done();
    });
  });
});