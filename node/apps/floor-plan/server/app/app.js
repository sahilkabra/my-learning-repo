var express = require("express");
var morgan = require('morgan');
var router = require('routes/router');
var config = require('app/config');
var app = express();
var appEvent = require('app/pubSub');

app.use(morgan('short'));
app.use(router);
//app.use(error);
appEvent.on('plan.dbConnected', function() {
        app.listen(config.express.port);
        console.log('Service (%d) started on port %d', config.pid, config.express.port);
});
