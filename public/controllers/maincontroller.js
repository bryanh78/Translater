var Translation = require('../models/models.js')

function createTranslation (req, res) {
	
	var transInfo = new Translation({
		info : req.body.info,
		language : req.body.language,
	})
	transInfo.save(function(err, data){
		res.send(data)
	})

}

module.exports = {
	createTranslation : createTranslation
}