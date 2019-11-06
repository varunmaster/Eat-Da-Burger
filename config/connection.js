// Set up MySQL connection.
var mysql = require("mysql");

var connection 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", // add your local password here.
    database: "burgers_db" // add your db name here
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// connection.config.typeCast = function(field, next) {
//   if (field.type == "TINY" && field.length == 1) {
//     return field.string() == "1"; // 1 = true, 0 = false
//   }
//   return next();
// };


// Export connection for our ORM to use.
module.exports = connection;
