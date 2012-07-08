var express = require('express')
,	port = process.env.PORT || 3000
;

var app = express.createServer();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

app.get('/', function(req, res){
	res.render("index");
});

app.listen(port);
console.log("listening on port " + port);