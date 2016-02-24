var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')(720563454268);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.sendFile('./html/index.html', {root : './public'});
});
// var translateCtrl = require('./controllers/maincontroller.js')

// app.get('/api/translate', translateCtrl.createTranslation)














var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})