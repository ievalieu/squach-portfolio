var express = require("express");
var router = express.Router();

//Get Homepage
router.get("/", ensureAuthenticated, function(req, res){
	res.render("index", {layout:"portfolio.handlebars"});
});
router.get("/portfolio", ensureAuthenticated, function(req, res){
	res.render("portfolio", {layout:"portfolio.handlebars"});
});
router.get("/contact", ensureAuthenticated, function(req, res){
	res.render("contact", {layout:"contact.handlebars"});
});
router.get("/resume", ensureAuthenticated, function(req, res){
	res.redirect("index");
});

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		req.flash("error_msg", "You are not logged in."); //can remove if want
		res.redirect("/users/login");
	}
}

module.exports = router;