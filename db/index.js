var mysql = require('mysql2');

// Your database connection is already made for you, though you may need to modify the credentials
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hrlax49students'
});

connection.connect();

module.exports = connection;