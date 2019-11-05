var connection = require("../config/connection.js");
// This file is used by model file
// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    connection.query("select * from burger;", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(name, cb) {
    connection.query("INSERT INTO burger (name, eaten) VALUES (?, false)", name, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(id, cb) {
    connection.query("UPDATE burger Set eaten = ? where id = ?", [true, id], (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
