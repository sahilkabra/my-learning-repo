var prompt = require("prompt")

var print = function(err, data) {
        if (err) throw err;
        console.log(data);
};

prompt.start();
prompt.get(['name'], print);
