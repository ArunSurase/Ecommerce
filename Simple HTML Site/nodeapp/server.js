var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("calling rest api");
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening on http://localhost:9000", host, port)
})