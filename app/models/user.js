var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({ 
	name: String, 
	password: String, 
	admin: Boolean 
}, {
    versionKey: false // You should be aware of the outcome after set to false
}));