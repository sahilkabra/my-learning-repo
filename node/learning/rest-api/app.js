//app.js
//
//Fetch the required modules

var Express = require("express");
var app = Express();
var bodyParser = require("body-parser");

app.use(bodyParser);

var port = process.env.PORT || 11000;

var router = Express.Router();

router.get('/', function(req, res) {
        res.json({message: "Hello Body Parser"});
        res.end();
});

app.use('/api', router);

app.listen(port);

console.log('App started on port: ' + port)
