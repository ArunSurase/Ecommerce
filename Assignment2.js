var http = require('http');

var server =http.createServer(function(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<h1>Hello from Node JS</h1>");
		res.end();
});
server.listen(9000);
console.log("Server started on port 9000");