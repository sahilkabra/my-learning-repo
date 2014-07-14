var assert = require('assert');
var fs = require('fs');

describe('When reading file', function() {
       it('the file size should be greater than 0', function(donecallback) {
                fs.stat('test.txt', function (err, stat) {
                        if (err) throw err;
                        assert.notStrictEqual(stat.size, 0);
                        donecallback();
                })
        })
});
