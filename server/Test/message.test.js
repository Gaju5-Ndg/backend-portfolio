import {faker} from "@faker-js/faker";
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.should();
chai.use(chaiHttp);

describe('Tests of the contact me enpoints', () => {
	describe('Test the sent the contact message', () => {
		const message = {
			name: faker.name.findName(),
			email: faker.internet.email(),
			msg: faker.lorem.sentence(),
		}

		const message2 = {
			name: faker.name.findName(),
			email: faker.internet.email(),
			msg: ''
		}

		it('Should send a message on contact me', done => {
			chai.request(app)
			.post('/api/message/sendMessage')
			.send(message)
			.end((err, res) => {
				res.should.have.status(201);
				res.body.should.be.a('object');
				res.body.should.have.property('msg', 'Message added');
				done();
			})
		});

		it('Should not send an empty message', done => {
			chai.request(app)
			.post('/api/message/sendMessage')
			.send(message2)
			.end((err, res) => {
				res.should.have.status(400);
				res.body.should.be.a('object');
				res.body.should.have.property('msg', 'Validation error');
				done();
			})
		})

		it('Should get one message', done => {
			chai.request(app)
			.get('/api/message/getOne/626acf573b1e0dbfac6eaaed')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
	})
})