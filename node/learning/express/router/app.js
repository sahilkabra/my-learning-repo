var express = require('express');

var router = express.Router();
var app = express();
var port = 11001;

var logger = require('app/logger');
var usersSingleton = require('app/users-singleton');
var usersSingletonNew = require('app/users-singleton');

router.use('/users', usersSingleton);
router.use('/usersnew', usersSingletonNew);

app.use('/', logger);
app.use('/test', router);

app.listen(port);
console.log('App (%d) listening on port %d', process.pid, port)

