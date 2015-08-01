function route(handle, pathname, res){
	console.log('debut du traitement de l url' + pathname + '.');
	if (typeof handle[pathname] === 'function'){
		handle[pathname]();
	} else {
		console.log('aucun gestionnaire associe a' + pathname);
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.write("404 objet non trouvé");
		res.end();
	}
}

exports.route = route;
