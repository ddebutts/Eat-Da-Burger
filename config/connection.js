const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
})

connection.connect(function (err) {
    if (err) throw err;
})

connection.query = util.promisify(connection.query)

module.exports = connection;