import chai from 'chai';
import chaiHttp from 'chai-http';
import {faker} from '@faker-js/faker'
import app from '../index.js';

chai.should();
chai.use(chaiHttp);

describe('Tests blog enpoints', () => {
	describe('Test adding a new post', () => {
		const post = {
			title: faker.name.findName(),
			content: faker.lorem.sentence(),
		}

		const post2 = {
			name: faker.name.findName(),
			email: faker.internet.email(),
			msg: ''
		}

		it('Should add a new post', done => {
			chai.request(app)
			.post('/api/post/post')
			.send(post)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('msg', 'post added');
				done();
			})
		});

		it('Should get all posts', done => {
			chai.request(app)
			.post('/api/post/getAll')
			.end((err, res) => {
				res.should.have.status(404);
				res.body.should.be.a('object');
				done();
			})
		})

		it('Should get one message', done => {
			chai.request(app)
			.get('/api/post/getOne/626af7fe70a6c99b8d3063ea')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
	})
})