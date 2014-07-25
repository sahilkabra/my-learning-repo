/*
 * This is the main router for the application. It will decide which route should 
 * go to which sub module
 */

var router = require('express').Router();
var floorPlan = require('app/floorPlan');

router.use('/plan', floorPlan);
module.exports = router;
