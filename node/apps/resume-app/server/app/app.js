var express = require('express');
var morgan = require('morgan');
var router = require('router/route');
var app = express();
app.use(morgan);

var port = process.env.PORT || 11001;
app.listen(port);
console.log('Service (%d) started on port %d', process.pid, port);
