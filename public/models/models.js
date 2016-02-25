var googleTranslate = require('google-translate')(720563454268);
var mongoose = require('mongoose');

var translatedSchema = mongoose.Schema({
	info : String,
	language : String,
})

module.exports = mongoose.model('Translation', translatedSchema)