import chai from 'chai';
import chaiHttp from 'chai-http';
import {faker} from '@faker-js/faker'
import app from '../index.js';

chai.should();
chai.use(chaiHttp);

describe('Testing the Whole API', () => {

  describe('Testing the whole signup feature and its messages', () => {
    const newUser = {
      names: faker.name.findName(),
      email: faker.internet.email(),
      password: 'password1',
     
    };

    const newUser2 = {
      names:'test1',
      email: 'test@test.com',
      password: 'password',
      
      
    };

    const newUser3 = {
      
		names:'test2',
		email: 'test2@test',
		password: 'password',
		
      
    };
    it('Should create new signup', done => {
      chai
        .request(app)
        .post('/api/users/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message', 'User Created Successfully');
          done();
        });
    });

    it('Should not create user if email exists', done => {
      chai
        .request(app)
        .post('/api/users/signup')
        .send(newUser2)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('error', 'This Email already exist, please use another email');
          done();
        });
    });

    it('Should not create the user if there is validation error', done => {
      chai
        .request(app)
        .post('/api/users/signup')
        .send(newUser3)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.have.be.a('object');
          done();
        });
    });
  });
});


describe('Testing the whole signin endpoint', () => {
  const newUser = {

    names: 'Test',
    email: 'testion@test.com',
    password:'password',
  };

  const user2 = {
    email: 'notest@notest.com',
    password: 'password'
  };

  const user3 = {
    email: 'test@test.com',
    password: 'password'
  };

  const user4 = {
    email: 'test',
    password: 'password'
  };
  
  // it('Should create new signup', done => {
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


  it('Should Signin a user with an account', done => {
    chai
      .request(app)
      .post('/api/users/signin')
      .send({ email: newUser.email, password: newUser.password })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('token');
        res.body.should.have.property(
          'message',
          'You are signed in successfully'
        );
        done();
      });
  });


  it('Should not Sign In if there is validation error', done => {
    chai
      .request(app)
      .post('/api/users/signin')
      .send(user4)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.have.be.a('object');
        done();
      });
  });

  it('Should not signin a user if Authentication failed', done => {
    chai
      .request(app)
      .post('/api/users/signin')
      .send(user3)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('message', 'SignIn Failed');
        done();
      });
  });
});