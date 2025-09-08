const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'hrms_user',
  password: process.env.DB_PASSWORD || 'hrms_password',
  database: process.env.DB_NAME || 'hrms_db',
  port: process.env.DB_PORT || 3306
});

module.exports = pool.promise();
