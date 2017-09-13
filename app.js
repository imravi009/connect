
/**
	* Node.js Login Boilerplate
	* More Info : http://kitchen.braitsch.io/building-a-login-system-in-node-js-and-mongodb/
	* Copyright (c) 2013-2016 Stephen Braitsch
**/

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// build mongo database connection url //
var dbURL = 'mongodb://localhost/mydb';
require('./api/models/model'); //created model loading here

require('./api/routes_dir/routes')(app);

mongoose.connect(dbURL);
mongoose.Promise = global.Promise;
http.createServer(app).listen(3000, function(){
	console.log('Express server listening on port 3000' );
});
