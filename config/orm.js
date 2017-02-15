const connection = require("connection.js");

var pass_question_marks = (length) => {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push("?");
    }
    return arr.toString();
};
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
};


var orm = {
        select_all: (table_name, callback_fn) => {
            var query_str = `select * from ${table_name};`;
            connection.query(query_str, (err, result) => {
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
        update_one: (table_name, objColVals, condition, callback_fn) => {
                var query_str = "UPDATE " + table_name;

                query_str += " SET ";
                query_str += objToSql(objColVals);
                query_str += " WHERE ";
                query_str += condition;

                console.log(query_str);
                connection.query(query_str, function(err, result) {
                        if (err) {
                            throw err;
                        }

                        callback_fn(result);
                    }
                }

                module.exports = orm;
