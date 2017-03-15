var express = require('express'),
	router 	= express.Router(),
	City 	= require('../models/City.js'); 

	router.get('/love', function(req, res){ 
		res.render('cities'); 

	})

	router.post('/love', function(req, res){
		console.log(req.body.city)
		res.send('success')

	// var city = new City({city: request.body.cityName,}); 
							
});
















module.exports = router; 