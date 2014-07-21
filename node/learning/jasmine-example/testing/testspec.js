var http = require('http');

describe('REST testing', function() {
        describe('When calling GET', function() {
                it ('should return a JSON with user names', function(done) {
                        http.get('http://indlinvh207:11001/test/users', function(response) {
                                var responseBuffer, data;
                                reposonse.on('data', function(err, chunk) {
                                        if (err) throw err;
                                        responseBuffer += chunk;
                                        console.log('res data');
                                });
                                response.on('end', function(err) {
                                        if (err) throw err;
                                        console.log('res end');
                                        data = JSON.parse(responseBuffer);
                                });
                                expect(data.length).toEqual(3);
                                done();
                        });
                });
        });
});
