var requirejs = require('requirejs');

//to load node style modules
requirejs.config({
        nodeRequire: require,
        baseUrl: 'app'
});

requirejs(['helloModule'], function(helloModule) {
        console.log('1 from requirejs');
        helloModule.sayHello();
});

requirejs(['helloModule'], function(helloModule) {
        console.log('2 from requirejs');
        helloModule.sayHello();
});
