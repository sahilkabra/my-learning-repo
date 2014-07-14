var users = ['toby', 'loki', 'joki'];
var getUsers = function(req, res) {
        res.setHeader('Content-type', 'text/plain');
        res.write(JSON.stringify(users));
        res.write('\n');
        res.end();
};

exports.get = getUsers;

var addUsers = function (req, res, next) {
        users.push(req.body.username);
        next();
};

exports.add = addUsers;
