/* eslint-env mocha */
'use strict';

// starts localhost:35729
require('./');

const request = require('supertest');

describe('tlr', function () {
	it('should successfully spawn a tiny-lr server', function (done) {
		request('http://localhost:35729')
			.get('/')
			.expect('Content-Type', /json/)
			.expect(/tinylr/)
			.expect(/Welcome/)
			.expect(200, done);
	});

	it('should respond to 404 routes', function (done) {
		request('http://localhost:35729')
			.get('/whatev')
			.expect('Content-Type', /json/)
			.expect('{"error":"not_found","reason":"no such route"}')
			.expect(404, done);
	});

	it('should be able to get /livereload.js file', function (done) {
		request('http://localhost:35729')
			.get('/livereload.js')
			.expect(/LiveReload/)
			.expect(200, done);
	});

	it('should be able to GET /changed to reload client', function (done) {
		request('http://localhost:35729')
			.get('/changed')
			.expect('Content-Type', /json/)
			.expect(/"clients":\[\]/)
			.expect(/"files":\[\]/)
			.expect(200, done);
	});

	it('should be able to GET /changed to reload client with files', function (done) {
		request('http://localhost:35729')
			.get('/changed?files=gonna.css,test.css,it.css')
			.expect('Content-Type', /json/)
			.expect('{"clients":[],"files":["gonna.css","test.css","it.css"]}')
			.expect(200, done);
	});

	it('should be able to POST /changed to reload client', function (done) {
		request('http://localhost:35729')
			.post('/changed')
			.expect('Content-Type', /json/)
			.expect(/"clients":\[\]/)
			.expect(/"files":\[\]/)
			.expect(200, done);
	});

	it('should be able to POST /changed to reload client with files', function (done) {
		var data = {clients: [], files: ['cat.css', 'sed.css', 'ack.js']};
		request('http://localhost:35729')
			.post('/changed')
			.send({files: data.files})
			.expect('Content-Type', /json/)
			.expect(JSON.stringify(data))
			.expect(200, done);
	});

	it('should be able to /kill the server', function (done) {
		request('http://localhost:35729')
			.get('/kill')
			.expect(200, function (err) {
				if (err) {
					return done(err);
				}
				done();
			});
	});
});

