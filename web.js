var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Woooooooooooo');
});

var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);
