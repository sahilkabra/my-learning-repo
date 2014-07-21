var requirejs = require('requirejs');

//to load node style modules
requirejs.config({
        nodeRequire: require,
        baseUrl: 'app'
});

requirejs(['helloModule'], function(helloModule) {
        helloModule.sayHello();
});
