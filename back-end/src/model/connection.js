const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
    port: process.env.PORT || 3306,
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'password',
    database: process.env.DATABASE || 'Chatbot'
  });

module.exports = connection;