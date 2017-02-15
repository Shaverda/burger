const orm = require("../config/orm.js");

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM. Export at the end of the burger.js file.

var burger = {
	select_all: (cb) => {
		orm.select_all("burgers", (res) => {
			cb(res);
		})
	},
	insert_one: (columns, values, cb) => {
		orm.insert_one("burgers", columns, values, (res) => {
			cb(res);
		});
	},
	update_one: (object, condition, cb) => {
		orm.update_one("burgers", object, condition, (res) => {
			cb(res);
		});
	}
};

module.exports = burger;