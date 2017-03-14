var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/city' 

mongoose.connect(connectionString); 

mongoose.connection.on('connnected', function(){
	console.log("connnected to " + connectionString); 
})

mongoose.connection.on('error', function(error){
	console.log("MongoDB error " + error)
})

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected from " + connectionString); 
})