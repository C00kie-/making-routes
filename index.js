var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
/*var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
*/

var handle = {
  '/' : 'resquestHandlers.start',
  '/start' : 'requestHandlers.start',
  '/upload' : 'resquestHandlers.upload'
}

server.start(router.route, handle);
