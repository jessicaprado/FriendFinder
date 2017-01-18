var express = require("express");
var app = express();
var bodyParser =  require("body-parser");
var path = require('path');
var http = require("http");
var fs = require("fs");
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
var friends = require('./app/data/friends.js');
var apiRoutes = require('./app/routing/apiRoutes.js');
var PORT = 3000;



