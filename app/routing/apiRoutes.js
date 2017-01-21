//var friends = require('./app/data/friends.js');
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
});

};

