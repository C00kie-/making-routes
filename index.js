var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}; /*un nvl obj, pas un peu sale?*/

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
/*fin de la def de l obj*/

server.start(router.route, handle);

