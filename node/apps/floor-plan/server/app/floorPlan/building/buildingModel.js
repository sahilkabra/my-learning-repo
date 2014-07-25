var mongoClient = require('mongodb').MongoClient;
var config = require('app/config');

var model = this;
mongoClient.connect(config.mongo.url, function(err, db) {
        if (err) throw err;
        model.db = db;
});
