var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
	loveShown: String,
	// posts: [mongoose.Schema.Types.Mixed],
	userName: String,
	city: String

})

var PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel

