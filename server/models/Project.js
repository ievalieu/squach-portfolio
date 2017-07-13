var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

//User Schema
var ProjectSchema = new Schema({
	
});

var Project = module.exports = mongoose.model("Project", ProjectSchema);
