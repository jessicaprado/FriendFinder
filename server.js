var express = require("express");
var app = express();
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
var apiRoutes = require('./app/routing/apiRoutes.js')(app);

app.set('port', 3000);

app.listen(app.get('port'), function() {
	console.log("Server listening on %s", app.get('port'));
});
//var PORT = process.env.PORT ll 8080



