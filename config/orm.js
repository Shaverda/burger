const connection = require("connection.js");

var pass_question_marks = (length) => {
	var arr = [];
	for (var i =0; i < length; i++){
		arr.push("?");
	}
	return arr.toString();
};



var orm = {
	select_all: (table_name, callback_fn) => {
		var query_str = `select * from ${table_name};`;
		connection.query(query_str, (err, result ) => {
			if (err) throw err;
			callback_fn(result);
		});
	},
	insert_one: (table_name, columns, values, callback_fn) => {
		var template = pass_question_marks(values.length);

		var query_str = `insert into ${table_name} (${columns.toString()} values (`;
		query_str += template;
		query_str += `) `;

		console.log(query_str);

		connection.query(query_str, values, (err, result) => {
			if (err) throw err;
			callback_fn(result);
		})

	}
	update_one: (table_name, object_w_key_values, where_clause, callback_fn) => {
		object_w_key_values = [object_w_key_values];
		object_w_key_values[0] = object_w_key_values[0].split;
		var query_str = `update ${table_name} set `;
		//TODO: FINISH/REFACTOR THIS LOLZ

	}
}

module.exports = orm;