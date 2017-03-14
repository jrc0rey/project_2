var mongoose = require('mongoose'); 

var CitySchema = new mongoose.Schema({
	cityName: String
});



var CityModel = mongoose.model('City', CitySchema);

module.exports = CityModel; 

