var config = module.exports;

config.express = {
        "port": process.env.PORT || 11001
};

config.mongo = {
        port: process.env.MONGOPORT || 27017,
        host: process.env.MONGOHOST || 'localhost'
};

config.pid = process.pid;
