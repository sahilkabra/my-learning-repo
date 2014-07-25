/**
 * Returns an array of building objects
 */

var buildingStore = require('./building/buildingStore');
var getBuildings = function() {
        return buildingStore.getBuildings();
};

exports.getBuildings = getBuildings;
