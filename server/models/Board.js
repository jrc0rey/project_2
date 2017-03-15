var mongoose = require('mongoose')

var BoardSchema = new mongoose.Schema({
	loveShown: String,
	// posts: [mongoose.Schema.Types.Mixed],
	userName: String,
	city: String

})

var BoardModel = mongoose.model('board', BoardSchema)

module.exports = BoardModel

