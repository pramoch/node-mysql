const mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '...',
  database: 'join_us'
});

module.exports = pool;