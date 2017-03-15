var express = require('express'),
	router 	= express.Router(),
	Board 	= require('../models/Board.js');

router.get('/post', function(req,res,next){
		Board.find(function(err, posts){
			res.render('postBoard', {postArray: posts})
		})
	})


router.post('/post', function(req, res){
	console.log(req.body.cityLove)
	res.send('success')
})








module.exports = router;