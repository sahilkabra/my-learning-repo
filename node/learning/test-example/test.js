var hello = require('sayHello');
var assert = require('assert');

assert.strictEqual(hello.hello(), 'hello there', 'Expected message differs from actual');
