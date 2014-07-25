/*
var buildings = [{
                'number': '1',
                'name': 'T1'
        },{
                'number': '2',
                'name': 'T2'
        }, {
                'number': '3',
                'name': 'T3'
        }
];
*/
exports.getBuildings = function() {
        return buildings;
};

exports.getBuilding = function(buildingName) {
        var building;
        for (var i = 0; i < buildings.length; i++) {
                if (buildings[i].name === buildingName) {
                        building = buildings[i];
                        break;
                }
        }
        return building;
};
