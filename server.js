// load the http library, which part of node.js core
var http = require('http');

// function that will be executed when a request is received
function onRequest(request, response) {
  console.log('request to url ', request.url);

  // write the response
  response.writeHead(200);
  // send the response back to the client, asynchronously
  response.end('Hey World');
}

// create the server and register the callback function to execute upon incoming requests
var server = http.createServer(onRequest);

// initiate listening for http requests on port 8888
server.listen(8888);


