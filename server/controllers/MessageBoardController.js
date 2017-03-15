var express = require('express'),
	router 	= express.Router(),
	Post 	= require('../models/Board.js');

router.get('/post', function(req,res,next){
		Post.find(function(err, posts){
			res.render('postBoard', {postsArray: posts})
		})
	})


router.post('/post', function(req, res){
	console.log(req.body.cityLove)

	var post = new Post({loveShown: req.body.loveShown}); 
	post.save();
	
	res.redirect('/city/post'); 
})








module.exports = router;