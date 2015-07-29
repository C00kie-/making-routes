var http = require('http')

function start(){
function onRequest (req, res){
	console.log('Request received.');
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello World');
	res.end();
	}
	http.createServer (onRequest).listen(8888);
	console.log('lancement du serveur, listen to 8888');
}

exports.start = start;
