var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(301, {
		"Location":"http://www.google.com"
	});
	res.end();
}).listen(3000);

console.log('Server listening');
