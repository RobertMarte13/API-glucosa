const {createPool} = require('mysql2/promise')

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'RobertMarte123@',
  database: 'dateregister',
  port: 3306
}) 

module.exports = pool
