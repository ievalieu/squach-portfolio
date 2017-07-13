//Dependencies
//=========================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

//Set up Mongo Connection
//=========================================================
mongoose.connect("mongodb://localhost/squach-portfolio");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

//Routes
//=========================================================
var routes = require("./server/controllers/index");

//Init App
//=========================================================
var app = express();

//View Engine for Handlebars
//=========================================================
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//BodyParser Middleware
//=========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());

//Set Static Folder
//=========================================================
app.use(express.static(path.join(__dirname,"public")));



//Middleware for Routes
//=========================================================
app.use("/", routes);

//Set Port
//=========================================================
app.set("port", (process.env.PORT || 3000));
app.listen(app.get("port"), function(){
	console.log("Server started on port " + app.get("port"));
});