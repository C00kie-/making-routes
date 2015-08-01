var exec = require("child_process").exec;

function start(res) {
	  console.log("Le gestionnaire 'start' est appelé.");
		exec("ls -lah", function (error, stdout, stderr) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(stdout);
    res.end();
  });
}

function upload(res) {
	  console.log("Le gestionnaire 'upload' est appelé.");
		res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Bonjour Upload");
  res.end();
}

exports.start = start;
exports.upload = upload;
