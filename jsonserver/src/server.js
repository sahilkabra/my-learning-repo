var jsonServer = require('json-server');

function startServer() {
    var server = jsonServer.create();
    server.use(jsonServer.defaults());

    var router = jsonServer.router('src/db.json');
    server.use(router)

    console.log('server listening at 4000');
    server.listen(4000);
}

module.exports = {
    startServer: startServer
};
