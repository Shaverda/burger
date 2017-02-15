const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Create the router for the app, and export the router at the end of your file.

router.get("/", (req, res) => {
	burger.select_all((data) => {
		var object = {
			burgers: data
		};
		res.render("index", object)
	});
});

router.post("/", (req, res) => { 
	burger.insert_one([
		"burger_name"], [req.body.name], () => {
			res.redirect("/");
		});
});

router.put("/", (req, res) => {
	burger.update({
		devoured: true
	}, id = req.body.id, () => {
		res.redirect("/");
	});
});

module.exports = router;