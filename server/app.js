var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	hbs = require('hbs')


app.use(bodyParser.urlencoded({extended: true}));

require('./db/db'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));











server.listen(3000, function(){
	console.log('server is up and running on port 3000')
})