module.exports = function(app, fs, path) {
var PORT = 3000;
var path = require('path');

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT)
});

app.get('/', function(req, res){
	 res.sendFile(path.join(__dirname + '/../public/home.html'));
});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

}







