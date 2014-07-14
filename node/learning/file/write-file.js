var filemodule = require('fs');

var writeFileCallback = function (err) {
        if (err) {
                console.log("error while writing file: " + err);
        } else {
                console.log("File written");
                filemodule.readFile('file.txt', 'utf-8', readFileCallback);
        }
}

var readFileCallback = function(err, data) {
        if (err) {
                console.log("error while reading: " + err);
        } else {
                console.log(data);
        }
}

filemodule.writeFile('file.txt', 'This is what I want to write\n', writeFileCallback);
