var http = require('http');
var url = require('url');
var fs = require ('fs');
var server = http.createServer(function(req,res){
		var urlparts = url.parse(req.url,true);
		var pathnm=urlparts.pathname;
		var fnm=pathnm.substring(1);
		fs.readFile(fnm,function(err,data){
			if(!err)
			{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<p style='color:blue'>"+data.toString()+"</p>");
				res.end();
			}
		});
});
server.listen(9000);
console.log("Server started on port 9000");