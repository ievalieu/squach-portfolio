var express = require("express");
var router = express.Router();

// //Get Homepage
// router.get("/", ensureAuthenticated, function(req, res){
// 	res.render("index", {layout:"portfolio.handlebars"});
// });
// router.get("/portfolio", ensureAuthenticated, function(req, res){
// 	res.render("portfolio", {layout:"portfolio.handlebars"});
// });
// router.get("/contact", ensureAuthenticated, function(req, res){
// 	res.render("contact", {layout:"contact.handlebars"});
// });
// router.get("/resume", ensureAuthenticated, function(req, res){
// 	res.redirect("index");
// });

// function ensureAuthenticated(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next();
// 	} else {
// 		req.flash("error_msg", "You are not logged in."); //can remove if want
// 		res.redirect("/users/login");
// 		// res.redirect("/");
// 	}
// }


router.get("/", function(req, res){
 	res.render("index", {layout:"index-body.handlebars"});
});
router.get("/portfolio", function(req, res){
 	res.render("index", {layout:"portfolio.handlebars"});
});
router.get("/contact", function(req, res){
 	res.render("index", {layout:"contact.handlebars"});
});
router.get("/resume", function(req, res){
 	res.render("index", {layout:"index.handlebars"});
});
module.exports = router;

//index is home
//main should be layout for website
