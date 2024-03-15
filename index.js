var http = require('http');
var url = require('url');
var querystring = require('querystring');
var = require('fs');
http.createServer(function(request, respone){
   pathName = url.parse(request.url).pathname;
   fs.readFile(__dirname + pathName, function(err, data){
      if(err){
         respone.writeHead(404, {'Content-type':'text/plan'});
         response.write('Page Was Not Found');
         response.end();
       } else {
         respone.writeHead(200, {'Content-type':'text/plan'});
         response.write(data);
         response.end( );
   }).listen(7000);
