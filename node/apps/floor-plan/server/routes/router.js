var router = require('express').Router();

var floorPlan = require('app/floorPlan');

router.use('/plan', floorPlan);

module.exports = router;
