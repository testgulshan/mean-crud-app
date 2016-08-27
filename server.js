var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
  res.send('working fine!');
});

app.listen(port, function () {
  console.log('server is running on http://localhost:' + port);
});