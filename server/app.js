var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	hbs = require('hbs')











server.listen(3000, function(){
	console.log('server is up and running on port 3000')
})