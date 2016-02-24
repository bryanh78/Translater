var googleTranslate = require('google-translate')(720563454268);

var translatedSchema = mongoose.Schema({
	info : String,
	language : String,
})

module.exports = mongoose.model('Translation', translatedSchema)