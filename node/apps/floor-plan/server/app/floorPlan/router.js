var router = require('express').Router();
var plan = require('app/floorPlan/floorPlanController');

var getBuildings = function(req, res) {
        console.log('fetching');
        var buildings = plan.getBuildings();
        console.log('fetched %s', JSON.stringify(buildings));
        res.json(buildings);
};

router.route('/')
        .get(getBuildings);

module.exports = router;
