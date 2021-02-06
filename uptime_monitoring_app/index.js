/*  
This is a NodeJS version of an uptime monitoring app
for web services, etc.
via the Pirple NodeJS Masterclass - Builing a RESTful API section
*/
//console.log("Hello, World!"); // for testing our Node install

//Primary file for the API
//Dependencies
var http = require('http');
var url = require('url');

//create HTTP server
var server = http.createServer(function(req, res){

    // Get url and parse it
    var parsedUrl = url.parse(req.url, true); //parse method is deprecated in 14.15
    //console.log('parsedUrl is: ' + parsedUrl); // this returns parsedUrl is: [object Object]
   // console.log('parsedUrl is:'); //this works
   // console.log(parsedUrl);
    /*
parsedUrl is:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/',
  path: '/',
  href: '/'
}

//Trying with localhost:3000/billy returns

parsedUrl is:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/billy',
  path: '/billy',
  href: '/billy'
}
path is:
/billy
trimmedPath is:
billy
    */

    // Get path from the URL
    var path = parsedUrl.pathname; // just the path portion of the url
    //console.log('path is: '+ path);// this returns path is: / or path is: /favicon.ico
    //console.log('path is:'); //this works
    //console.log(path);
    /*
path is:
/
    */

    var trimmedPath = path.replace(/^\/+|\/+$/g, ''); //this trims out the slashes at the beginning and end
    //console.log('trimmedPath is: ' +  trimmedPath); // this returns trimmedPath is:  or trimmedPath is: favicon.ico
    //console.log('trimmedPath is:'); //this works
    //console.log(trimmedPath);

    /*
trimmedPath is:

    */

    //Get the query string as an object
    var queryStringObject = parsedUrl.query;
    //console.log('query string is: ');
    //console.log(queryStringObject);
    /* 
query string is: 
[Object: null prototype] {} // no query strings in the url
Request received on path: billy/jean/is/not/my/lover with method get
query string is: 
[Object: null prototype] {}
Request received on path: favicon.ico with method get
vs.
http://localhost:3000/billy/?fizz=buzz // this has a "fizz=buzz" query string in the url
query string is: 
[Object: null prototype] { fizz: 'buzz' }
Request received on path: billy with method get

    */

    //Get the HTTP method
    var method = req.method.toLowerCase();

    //Get Request Headers
    var requestHeaderObject = req.headers;
    console.log('request header is: ');
    console.log(requestHeaderObject);

    /*
request header is: 
{
  host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
  accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-dest': 'image',
  referer: 'http://localhost:3000/billy/?fizz=buzz',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  cookie: 'csrftoken=NI4GhiBZ0VMqlx2xRVUnlZkTNRj82dCuFRFchgOCw6waxaUcfZ2JdWFI70RIKNo8'
}


    */

    //Send the response
    res.end("sup beyotch\n");

    //Log the request path
    console.log('Request received on path: ' + trimmedPath + ' with method ' + method);
    // checking with url localhost:3000/billy returns
    //Request received on path: billy
    //Request received on path: favicon.ico
}); 

//Start the server and have it listen on port 3000
server.listen(3000, function(){
    console.log("The server is listening on port 3000.");
});
