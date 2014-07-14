var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

vows.describe('Learning Vows').addBatch({
        'When trying to read a file': {
                topic: function() {fs.stat('test.txt', this.callback)},
                'the file should be present': function (err, file) {
                        assert.strictEqual(err, null, err);
                },
                'the file should not be empty': function (err, file) {
                        assert.notStrictEqual(file.size, 0);
                }
        }
}).run();
