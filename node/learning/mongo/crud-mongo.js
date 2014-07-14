var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/agg", function (err, db) {
        if (err) throw err;

        db.collection('products').findOne({}, function(err, doc) {
                if (err) throw err;
                console.log(doc);
                db.close();
        });
        
});

