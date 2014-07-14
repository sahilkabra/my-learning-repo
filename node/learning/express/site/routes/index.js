var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.send('Hello from about');
});

module.exports = router;
