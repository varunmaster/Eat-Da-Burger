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
    connection.query("INSERT INTO burger (name ,status) VALUES (?, 'Not Eaten')", name, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(id, cb) {
    connection.query("UPDATE burger Set status = 'Eaten' where ?", id, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
