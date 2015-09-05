// requirements
var express = require('express'),
    app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

app.get("/burger", function(req, res) {
	res.send(burgers);
})

app.get("/greet/:name", function(req,res) {
	res.send("Hello, " + req.params.name);
})

app.get("/welcome", function(req,res) {
	res.send("Whatsup, " + req.query.name);
})

// start the server
app.listen(3000, function () {
    console.log("Server Running At Full Speed on Localhost:3000/");
});