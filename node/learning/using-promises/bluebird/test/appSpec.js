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
