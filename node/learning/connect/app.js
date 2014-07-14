var connect = require("connect");

var app = connect();
var port = process.env.PORT || 11001;

var logger = function(req, res, next) {
        console.log('%s %s', req.method, req.url);
        console.log('%s', JSON.stringify(req.headers));
        next();
};

var sayHello = function(req, res) {
        res.setHeader('Content-type', 'text/plain');
        res.write("hello\n");
        res.end();
};

var users = require('app/users');
app.use(require('morgan')('tiny'));
app.use(require('body-parser').json());
app.use('/', sayHello);
app.use('/users/add', users.add);
app.use('/users', users.get);


app.listen(port);
console.log("app started: %s", process.pid);
