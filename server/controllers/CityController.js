var express = require('express'),
	router 	= express.Router(),
	City 	= require('../models/City.js'); 

	router.get('/love', function(req, res){
		City.find(function(err,cities){
			res.render('cities', {citiesArray: cities})
		})
	})

	router.post('/love', function(req, res){
		console.log(req.body.cityName)
		// res.send('success')

	var city = new City({cityName: req.body.cityName}); 
	city.save();
	
	res.redirect('/city/love'); 
	
	});
















module.exports = router; 