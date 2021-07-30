console.log("server started");

var express = require('express');
var app = express();
var serv = require('http').Server(app);
var port = process.env.PORT || 8080;

app.get('/',function(req, res) {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});

app.use('/client',express.static(__dirname + '/client'));//listens for when the client wants files.
serv.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});