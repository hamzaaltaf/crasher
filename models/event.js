var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
	title: String,
	mdate: String, 
});

var event = module.exports =  mongoose.model('Event', catSchema)


module.exports.createEvent = function(eventobj, callback) {
    eventobj.save(callback);
}
