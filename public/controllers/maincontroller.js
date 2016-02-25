var Translation = require('../models/models.js')
var googleTranslate = require('google-translate')('AIzaSyCPhPnJcBuX6tpyvIRVFka_EHGGzLDAFjA');

function createTranslation (req, res) {
	
	var transInfo = new Translation({
		info : req.body.info,
		language : req.body.language,
	})
	googleTranslate.translate(transInfo.info, transInfo.language, function(err, translation) {
   		res.send(translation)

});


// 	transInfo.save(function(err, data){
		
// 	})

}


module.exports = {
	createTranslation : createTranslation
}