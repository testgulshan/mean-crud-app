var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var port            = 3000;

app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send('index.html');
});

app.listen(port, function () {
  console.log('server is running on http://localhost:' + port);
});