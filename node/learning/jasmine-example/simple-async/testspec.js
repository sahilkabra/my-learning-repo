var fs = require('fs');

describe('simple spec', function() {
       it('will contain an expectation', function() {
                expect(true).toBe(true);
                expect(false).toBe(false);
        });
});

describe('Pending tests', function() {
        xit ('can be declared pending by calling pending', function() {
                expect(false).toBe(true);
                pending();
        });
});

describe('The Test REST client APIs', function() {
        var validateResponse = function(err, response, body) {
                expect(response['headers']['content-type']).toMatch(/application\/json/);
        };
        var request = require('request');
        it ('first call will get user names', function(done) {

                request('http://localhost:11001/test/users', function(err, response, body) {
                        validateResponse(err, response, body);
                        var data = JSON.parse(body);
                        expect(data).not.toBe(null);
                        done();
                });
        });
        it('can also add a new username', function(done) {
                var options = {
                        url: 'http://localhost:11001/test/users/add',
                        method: 'POST',
                        headers: {
                                'content-type': 'application/json'
                        },
                        body: '{"username": "roki"}'
                };
                request(options, function(err, response, body) {
                        validateResponse(err, response, body);
                        expect(JSON.parse(body).indexOf('roki')).not.toBe(-1);
                        done();
                });
        });
});
