var injectr = require('injectr');

var mockBuildings = [{
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

describe('The floor Plan Module', function() {
	var floorPlan = null
	var mockBuildingStore = jasmine.createSpyObj('buildingStore', ['get']);

	beforeEach(function() {
		floorPlan = injectr('../app/floorPlan/floorPlanController.js', {
				'./building/buildingStore': mockBuildingStore
		});
		mockBuildingStore.get.andCallFake(function() {
				return mockBuildings;
		});
	});
	it('returns a list of buildings', function() {
		var buildings = floorPlan.getBuildings();
		expect(mockBuildingStore.get).toHaveBeenCalled();
		expect(buildings).toEqual(mockBuildings);
	});
	xit('returns one building when a name is passed', function() {
		var building = floorPlan.getBuildings({name: 'T1'});

		expect(buildings).not.toBe(null);
		expect(building.name).toEqual('T1');
	});
});
