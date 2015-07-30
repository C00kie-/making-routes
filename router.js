function route(handle, pathname){
	console.log('debut du traitement de l url' + pathname + '.');
	if (typeof handle[pathname] === 'function'){
		handle[pathname]();
	} else {
		console.log('aucun gestionnaire associe a' + pathname);
	}
}

exports.route = route;
