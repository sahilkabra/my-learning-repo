define(function(require) {
        var sayHelloNode = require('sayHello'),
                _ = require ('underscore'),
                helloRequire = require('helloRequire');
        var counter = 0;
        var sayHello = function() {
                var stringarray = ['hello', 'user'];
                _.forEach(stringarray, function(element) {
                        console.log(element);
                });
                console.log('Request#: %d', counter++);
                console.log(sayHelloNode.hello());
                console.log(helloRequire.hello());
        };

        return {sayHello: sayHello}
});
