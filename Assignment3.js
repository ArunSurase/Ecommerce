var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
		var urlparts = url.parse(req.url,true);
		var uname=urlparts.query.uname;
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<h1>Welcome "+uname+"</h1>");
		res.end();
});
server.listen(9000);
console.log("Server started on port 9000");