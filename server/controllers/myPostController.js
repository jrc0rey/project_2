var express = require('express'),
	router 	= express.Router(),
	myPost 	= require('../models/MyPost.js'); 

	router.get('/myPost', function(req, res){
		console.log('hey'); 
		res.render('myPost'); 


})








module.exports = router; 