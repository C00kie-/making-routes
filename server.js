var http = require('http')
var url = require('url')

function start(route, handle){
function onRequest (req, res){
	var pathname = url.parse(req.url).pathname;
	console.log('Request received for ' + pathname + '.');
	route(handle, pathname, res);
	}
	http.createServer (onRequest).listen(8888);
	console.log('lancement du serveur, listen to 8888');
}

exports.start = start;
