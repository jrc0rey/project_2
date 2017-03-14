var express = require('express'),
	router 	= express.Router(),
	City 	= require('../models/City.js'); 

	router.get('/cities', function(req, res){
		console.log('hey'); 
		res.render('cities'); 

	})

	router.post('/cities', function(request, response){
	var city = new City({city: request.body.name,}); 
								
	city.save();
});
















module.exports = router; 