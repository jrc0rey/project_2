var express = require('express'),
	router = express.Router(),
	User = require('../models/User.js'),
	bcrypt = require('bcryptjs');




router.get('/register', function(req,res,next){
	res.render('register')
})

router.post('/register', function(req,res,next){
	// console.log(req.body);
		User.findOne({username: req.body.username}, function(err,user){

		if(user === null){
			
			bcrypt.genSalt(10, function(err, salt){
				
				bcrypt.hash(req.body.password, salt, function(err, hash){
					
					var entry = {}
					entry.username = req.body.username;
					entry.password = hash;

					console.log(entry)
					
					User.create(entry, function(err, user){
						if(user){
							req.session.username = user.username;
							req.session.userId = user.id;
							req.session.isLoggedIn = true;

							res.redirect('/city/love')
						}
						else{
							res.send('there was some error');
						}
					})
				})
			})		
		}
		else{
			res.render('register', {message: 'username is taken'})
		}
	})
});

router.get('/login', function (req,res){
	res.render('login')
})

router.post('/login', function(req,res){
User.findOne({username: req.body.username}, function(err, user){
		if(user){
			bcrypt.compare(req.body.password, user.password, function(err, match){
				if(match === true){
				req.session.username = user.username;
				req.session.userId = user.id;
				req.session.isLoggedIn = true;

				res.redirect('/city/love')

				}

				else{
					console.log('not working')
					res.render('register', {message: 'username or password not found'})
				}

			})
		}

	else if(user === null){
			console.log('not working')
			res.render('register', {message: 'username or password not found'})
		}
	})
})






module.exports = router;