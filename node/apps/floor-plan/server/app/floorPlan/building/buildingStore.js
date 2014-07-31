var buildingModel = require('./buildingModel');

exports.get = function(criteria) {
        if (criteria)   return buildingModel.getByCriteria(criteria);
        return buildingModel.getAll();
};
