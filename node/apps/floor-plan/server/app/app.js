var express = require('express');
var morgan = require('morgan');
var router = require('routes/router');
var app = express();
app.use(morgan('short'));
app.use(router);
//app.use(error);
var port = process.env.PORT || 11001;
app.listen(port);
console.log('Service (%d) started on port %d', process.pid, port);
