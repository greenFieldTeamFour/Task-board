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

//this function gives the server data from the database or an err message
//if data cannot be retrieved
var getInfoFromDatabase = function(callback){
    connection.query('SELECT * FROM task', function(err, data){
      if(err){
        callback(err, null);
      }else{
        callback(null, data)
      }
    });
};

//this function inserts data inputed by the frontend into the database
const insertOne = function (task, cb){
  con.query('INSERT INTO comments (task) VALUES(?)',
[ , task], (err, results, fields )=>{
  if(err) {
    console.log(posErr1);
      cb(err, null);
    } else {
      console.log(results);
      cb(null, results);
    }
 });
};
//export to server
module.exports.getInfoFromDatabase = getInfoFromDatabase
