var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.get(/^(.+)$/, function(req, res){
 res.sendfile( __dirname + req.params[0]);
});

app.listen(port, function() {
	console.log("Listening on " + port);
});
