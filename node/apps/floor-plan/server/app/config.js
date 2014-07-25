var config = module.exports;

config.express = {
        "port": process.env.PORT || 11001
};

config.mongo = {
        port: process.env.MONGOPORT || 27017,
        host: process.env.MONGOHOST || 'localhost',
        dbName: process.env.MONGODB || 'floorPlan'
};

config.mongo.url = function() {
        return 'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.dbName;
}();

config.pid = process.pid;
