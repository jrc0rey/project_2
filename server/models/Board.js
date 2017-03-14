var mongoose = require('mongoose')

var BoardSchema = new mongoose.Schema({
	cityName: String,
	posts: [mongoose.Schema.Types.Mixed],

})

var BoardModel = mongoose.model('board', BoardSchema)

module.exports = BoardModel