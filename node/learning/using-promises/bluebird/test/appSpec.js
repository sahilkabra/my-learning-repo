var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

describe('The getStudents async function', function() {
		var app = require('app/app');

		it('should return a student via the promise API', function() {
				expect(app.getStudents(2)).to.eventually.deep.equal({name: 'xyz', id:2});
		});
		it('should throw via the promise API', function() {
				expect(app.getStudents(6)).to.be.rejectedWith('Not found');
		});
});

describe('Using Promises', function() {
		var app = require('app/app');
		describe('with promise then API', function() {
			it('should return a student and callback should be called with then', function(done) {
				var expectStudent = function(student) {
					expect(student).to.have.property('name').and.equal('xyz');
					done();
				};
				app.getStudents(2).then(expectStudent);
			});
			it('the reject function should be called', function(done) {
				var expectStudentRej = function(e) {
					expect(e).to.have.string('Not found');
					done();
				};
				app.getStudents(8).catch(expectStudentRej);
			});
		});
		describe('with node callback API', function() {
			it('should return a student', function(done) {
				var expectStudent = function(err, student) {
					expect(err).to.not.exist;
					expect(student).to.have.property('name').and.equal('xyz');
					done();
				};
				app.getStudents(2, expectStudent);
			});
			it('should throw an error', function(done) {
				var expectStudent = function(err, student) {
					expect(err).to.have.string('Not found');
					done();
				};
				app.getStudents(8, expectStudent);
			});
		});
});
