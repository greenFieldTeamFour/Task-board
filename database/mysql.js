// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'holacode',
  database: 'taskBoard',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
var getInfoFromDatabase = function(callback){
    connection.query('SELECT * FROM task', function(err, data){
      if(err){
        callback(err, null);
      }else{
        callback(null, data)
      }
    });
};

module.exports.getInfoFromDatabase = getInfoFromDatabase
