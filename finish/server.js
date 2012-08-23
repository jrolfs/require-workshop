var port = process.env.PORT || 3000;

var express = require("express"),
	app     = express.createServer();
	
app.get("/", function(req, res) {
	res.redirect("/index.html");
});

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
	app.use(app.router);
});

app.listen(port);