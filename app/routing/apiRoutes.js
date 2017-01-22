var friends = require('../data/friends.js');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {

	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())
	app.use(bodyParser.json({ type: 'application/*+json' }))
	app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
	app.use(bodyParser.text({ type: 'text/html' }))

	app.get('/api/friends', function(req, res){
	  	res.json(friends);
	}
  	
});

app.post("/api/friends", function(req, res) {
 	var newFriend = req.body;
	var totalDifference = 0
	var allDifferences = [];

	for (var i = 0; i < (friends.length - 1); i++){
		totalDifference = 0;

		for (var j = 0; j < 10; j++){
			totalDifference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);	
		}
		allDifferences.push(totalDifference);
	}

	var bestMatch = friends[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
	res.send(bestMatch);
});

}