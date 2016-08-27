var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var port            = 3000;

var mongoose        = require('mongoose');
    mongoose.connect('mongodb://localhost/mean-auth');

// error handling
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Database: "mean-auth"');
});

app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// schema definition
var userSchema = mongoose.Schema({
  name: String,
  email: String
});

// create a modal with the userSchema schema
var Users = mongoose.model('users', userSchema);

app.get('/', function (req, res) {
  res.send('index.html');
});

// get all users
app.get('/users', function (req, res) {
  Users.find(function (err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});

// get specific user via id
app.get('/users/:id', function (req, res) {
  Users.findOne({
    _id: req.params.id
  }, function (err, user) {
    if (err)
      res.send('error occurred');

    res.json(user);
  })
});

// create new user
app.post('/users', function (req, res) {
  Users.create({
    name: req.body.name,
    email: req.body.email
  }, function (err, user) {
    if (err)
      res.send(err);

    Users.find(function (err, users) {
      if (err)
        res.send(err);

      res.json(users);
    })
  });
});

app.listen(port, function () {
  console.log('server is running on http://localhost:' + port);
});