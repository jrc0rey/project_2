var express = require('express'),
	router 	= express.Router(),
	Post 	= require('../models/Post.js');
//wildcard
router.get('/city/:city', function(req,res,next){
            
            if(req.session.isLoggedIn === true){        
            var newCity = req.params.city;
            // console.log(req.session.username)
            var username = req.session.username
			Post.find({city: newCity}, function(err, posts){
            res.render('postBoard', {postsArray: posts, city: newCity, username: username })
            })    
            
            }
            
            else{    
                   res.redirect('/user/login');  
        }
    })


router.post('/city/:city', function(req, res){
	var newCity = req.params.city;
	// console.log(req.body.cityLove)
	var username = req.session.username

	var post = new Post({loveShown: req.body.loveShown,
						 city: newCity,
						  userName: username}); 
	post.save();
	
	res.redirect('/post/city/' + newCity); 
})








module.exports = router;