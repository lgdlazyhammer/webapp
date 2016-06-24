// set variables for environment
var express = require('express');
var app = express();
//use default express session store
var session = require('express-session');
app.set('port', (process.env.PORT || 5000));
app.use(session({ secret: 'keyboard cat' , cookie: { maxAge: 60000 }}));

//use cookie parser to get request cookies value
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var path = require('path');

var http = require('http');
var querystring = require('querystring');
//parse post parameters
var bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static(__dirname));
// Set server port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use('/', function(req, res) {
    res.render('index');
});