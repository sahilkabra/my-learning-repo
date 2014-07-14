var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;

	if (pathname === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.write('This is the home page');
	} else if (pathname === '/about') {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.write('This is the about us page');
	}
	res.end();
}).listen(3000);
console.log('Server running');
