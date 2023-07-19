const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Chatbot'
  });

module.exports = connection;