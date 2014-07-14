var users = ['toby', 'loki', 'joki'];
var router = require('express').Router();
var bodyParser = require('body-parser');
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

var getUser = function(req, res) {
        res.send('username at location ' + req.params.id + ' is ' + users[req.params.id] + '\n');
};

var getUsers = function(req, res) {
        res.json(users);
};

var addUser = function (req, res, next) {
        if (req.body.username) {
                users.push(req.body.username);
                emitter.emit('userAddedSuccess', req, res, next);
        } else {
               var err = new Error('User name not found');
               emitter.emit('error', err);
        }
};

var updateUser = function(req, res, next) {
        throw new Error('Not implemented: ' + req);
};

var deleteUser = function(req, res) {
        users.splice(req.params.id, 1);
        res.send(200);
};

var error = function(err, req, res, next) {
        console.log(err.stack);
        res.send(500, 'An error occurred');
};

emitter.on('userAddedSuccess', getUsers);

router.use('/', bodyParser.json());

router.get('/', getUsers);
router.post('/add', addUser);
router.route('/:id')
        .get(getUser)
        .put(updateUser)
        .post(addUser)
        .delete(deleteUser);
router.use(error);
module.exports = router;
