
var buildingStore = require('./building/buildingStore');
var floorStore = require('./floor/floorStore');

/**
 * Returns an array of building objects
 */
var getBuildings = function() {
        return buildingStore.getBuildings();
};

/**
 * Returns a building object
 */
var getBuilding = function(buildingName) {
        return buildingStore.getBuilding(buildingName);
}

var getFloors = function(buildingName) {
        return floorStore.getFloor(buildingName);
}

exports.getBuildings = getBuildings;
exports.getFloors = getFloors;
exports.getBuilding = getBuilding;
