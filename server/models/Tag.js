//digital, traditional, sketch, abstract, oil paint, acrylic paint, graphite, penandink, surreal, realism, cartoon, sprites, charcoal, chalkpastel, other
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

//User Schema
var TagSchema = new Schema({
	
});

var Tag = module.exports = mongoose.model("Tag", TagSchema);
