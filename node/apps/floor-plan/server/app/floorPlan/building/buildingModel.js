var mongoClient = require('mongodb').MongoClient;
var config = require('app/config').mongo;

var db; 
mongoClient.connect(config.url, function(err, database) {
        if (err) throw err;
        db = database;
});
