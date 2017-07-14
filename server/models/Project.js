var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

//User Schema
var ProjectSchema = new Schema({
	title: {
		type: String,
		index: true
	},
	description: {
		type: String
	},
	tag: {
		type: String
	},
	category: {
		type: String
	}
});

var Project = module.exports = mongoose.model("Project", ProjectSchema);
