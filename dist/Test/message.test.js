"use strict";

var _faker = require("@faker-js/faker");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('Tests of the contact me enpoints', function () {
  describe('Test the sent the contact message', function () {
    var message = {
      name: _faker.faker.name.findName(),
      email: _faker.faker.internet.email(),
      msg: _faker.faker.lorem.sentence()
    };
    var message2 = {
      name: _faker.faker.name.findName(),
      email: _faker.faker.internet.email(),
      msg: ''
    };
    it('Should send a message on contact me', function (done) {
      _chai["default"].request(_index["default"]).post('/api/message/sendMessage').send(message).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'Message added');
        done();
      });
    });
    it('Should not send an empty message', function (done) {
      _chai["default"].request(_index["default"]).post('/api/message/sendMessage').send(message2).end(function (err, res) {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('msg', 'Validation error');
        done();
      });
    });
    it('Should get one message', function (done) {
      _chai["default"].request(_index["default"]).get('/api/message/getOne/626acf573b1e0dbfac6eaaed').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});