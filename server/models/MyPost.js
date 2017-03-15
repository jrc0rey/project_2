var mongoose = require('mongoose'); 

var MyPostSchema = new mongoose.Schema({
	myPostName: String

});



var myPostModel = mongoose.model('MyPost', MyPostSchema);

module.exports = myPostModel; 
