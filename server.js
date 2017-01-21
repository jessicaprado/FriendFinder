var express = require("express");
var app = express();
var bodyParser =  require("body-parser");
var path = require('path');
var http = require("http");
var fs = require("fs");
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
var apiRoutes = require('./app/routing/apiRoutes.js')(app);
var PORT = 3000;

//var PORT = process.env.PORT ll 8080



