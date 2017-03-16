var express = require('express'),
	router 	= express.Router(),
	Post 	= require('../models/Board.js');
//wildcard
router.get('/post/:city', function(req,res,next){
		var newCity = req.params.city;
		console.log(req.params.city)
		Post.find({city: newCity}, function(err, posts){
			res.render('postBoard', {postsArray: posts, city: newCity})
		})
	})


router.post('/post/:city', function(req, res){
	var newCity = req.params.city;

	console.log(req.body.cityLove)

	var post = new Post({loveShown: req.body.loveShown,
						 city: newCity}); 
	post.save();
	
	res.redirect('/board/post/' + newCity); 
})








module.exports = router;