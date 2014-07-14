var http = require("http");
var url = ["google.com", "amdocs.com", "shapeshed.com"];

function fetchpage(url) {
	var start = new Date();
	http.get ({host: url}, function(res) {
		console.log('Got response from: ' + url);
		console.logt('Time Taken: ' + new Data() - start + 'ms');
	});
}

for (var i = 0; i < url.length; i++) {
	fetchpage(url[i]);
}

