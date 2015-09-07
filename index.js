// requirements
var express = require('express'),
 db = require("./models"),
    app = express();


    path = require("path"),
    bodyParser = require("body-parser"),
    views = path.join(process.cwd(), "views/");


app.get("/",function(req,res){
    res.sendFile(views +"/index.html");
});

app.get("/signup", function(req,res) {
    res.sendFile(views + "/signup.html");
});

app.get("/login", function(req,res) {
    res.sendFile(views + "/login.html");
});

app.post("/signup#", function(req, res) {
	var user = req.body.user;
	var username = user.username;
	var email = user.email;
	var password = user.password;

	db.User.createSecure(username, email, password, function() {
		res.send(username + " is registered!\n");
	});
});

// start the server
app.listen(3000, function () {
    console.log("Server Running At Full Speed on Localhost:3000/");
});