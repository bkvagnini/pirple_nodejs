/*  
This is a NodeJS version of an uptime monitoring app
for web services, etc.
via the Pirple NodeJS Masterclass - Builing a RESTful API section
*/
//console.log("Hello, World!"); // for testing our Node install

//Primary file for the API
//Dependencies
var http = require('http');

//create HTTP server
var server = http.createServer(function(req, res){
    res.end("sup beyotch\n");
}); 

//Start the server and have it listen on port 3000
server.listen(3000, function(){
    console.log("The server is listening on port 3000.");
});
