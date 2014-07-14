var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res) {
	res.send('Request to show details for user: ' + req.params.id);
});

module.exports = router;
