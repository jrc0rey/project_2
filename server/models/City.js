var mongoose = require('mongoose')

var CitiesSchema = new mongoose.Schema({
	cityName: String
});

var cityModel = mongoose.model('City', CitySchema);

module.exports = cityModel