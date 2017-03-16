var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	hbs = require('hbs'),
	session = require('express-session')


require('./db/db.js');

var UserController = require('./controllers/UserController.js');
var CityController = require('./controllers/CityController.js');
var PostController = require('./controllers/PostController.js');

app.use(session({
	secret:'city love',
	resave: false,
	saveUninitialized: true,
	cookie:{secure: false}
})) 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', UserController)
app.use('/city', CityController)
app.use('/post', PostController)










server.listen(3000, function(){
	console.log('server is up and running on port 3000')
})