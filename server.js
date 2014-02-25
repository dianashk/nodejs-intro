var http = require('http');
var Greeting = require('./Greeting');

// instantiate a Greeting object with default language set to 'english'
var greeting = new Greeting('english');

function onRequest (request, response) {

  var urlParts = request.url.split('/');

  greeting.getText(urlParts[1], function (data) {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    response.end(data);
  });
}

http.createServer(onRequest).listen(8888);
