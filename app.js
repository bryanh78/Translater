var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')('AIzaSyCPhPnJcBuX6tpyvIRVFka_EHGGzLDAFjA');

mongoose.connect('mongodb://localhost/lingo')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.sendFile('./html/index.html', {root : './public'});
});


var translateCtrl = require('./public/controllers/maincontroller.js')

app.post('/api/translation', translateCtrl.createTranslation)

app.post('/quiztime', function(req, res) {
	res.redirect('/quiz')
})
app.get('/quiz',function(req, res){
	res.sendFile('quiz.html', {root : './public/html'})
})

// var quizCtrl = require('./public/controllers/quiz.js')

// app.post('/api/quiz', quizCtrl.createQuiz)










var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})