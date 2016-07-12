// set variables for environment
var express = require('express');
var engine = require('ejs-locals');
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
// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
// use either jade or ejs 
app.set('view engine', 'ejs'); 
// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));     
// instruct express to server up static assets
app.use(express.static( path.join(__dirname, 'public')));
// Set server port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use('/login', function(req, res) {
    res.render('login');
});

app.use('/register', function(req, res) {
    res.render('register');
});

app.use('/logs', function(req, res) {
    res.render('logs');
});

app.use('/local/login', function(req, res) {
    res.render('local-login');
});

app.use('/local/users', function(req, res) {
    res.render('local-users');
});

app.use('/local/consumers', function(req, res) {
    res.render('local-consumers');
});

app.use('/local/resourceowners', function(req, res) {
    res.render('local-resource-owners');
});

app.use('/local/supervisiondeal', function(req, res) {
    res.render('local-supervision-deal');
});
