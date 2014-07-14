var consoleLogger = function(req, res, next) {
        console.log(req.method, req.url);
//        console.log(req);
        next();
};
module.exports = consoleLogger;
