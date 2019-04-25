//Details to connect to mysql
const mysql = require('mysql2')
// create a connection pool in order to avoid fail connections to mysql
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'student',
  password: 'Holacode1',
  database: 'TaskBoard'
})

getConnection = () =>  {
  return pool
}

module.exports = getConnection