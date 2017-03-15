var express = require('express'),
	router 	= express.Router(),
	Post 	= require('../models/Board.js');
//wildcard
router.get('/post/:city', function(req,res,next){
		var newCity = req.params.city;
		console.log(req.params.city)
		Post.find({city: "chicago", loveShown:"ball" }, function(err, posts){
			res.render('postBoard', {postsArray: posts})
		})
	})


router.post('/post', function(req, res){
	console.log(req.body.cityLove)

	var post = new Post({loveShown: req.body.loveShown,
						 city: "chicago"}); 
	post.save();
	
	res.redirect('/board/post/chicago'); 
})








module.exports = router;