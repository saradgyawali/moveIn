// requirements
var express = require('express'),
    app = express();

    path = require("path"),
    //bodyParser = require("body-parser"),
    // _ = require("underscore"),
    views = path.join(process.cwd(), "views/");


app.get("/",function(req,res){
    res.sendFile(views +"/index.html");
});

app.get("/signup", function(req,res) {
    res.sendFile(views + "/signup.html");
})

app.get("/login", function(req,res) {
    res.sendFile(views + "/login.html");
})


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