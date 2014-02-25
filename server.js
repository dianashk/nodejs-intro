var http = require('http');

function onRequest(request, response) {
  console.log('request to url ', request.url);
  response.writeHead(200);
  response.end('Hey World');
}

http.createServer(onRequest).listen(8888);


