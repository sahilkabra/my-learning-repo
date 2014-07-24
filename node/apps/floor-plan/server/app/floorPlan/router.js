var router = require('express').Router();
var plan = require('app/floorPlan/floorPlanController');

router.route('/')
        .get(plan.getBuildings);

module.exports = router;
