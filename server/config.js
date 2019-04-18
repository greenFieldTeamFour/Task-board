const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');

const app = express();

var databaseInfo = require('../database/mysql.js')

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

//retrievs data from the database and displays it as a json object
//in the front end
//gives you and err message if data cannot be retrieved
app.get('/tasks', function(req, res){
  databaseInfo.getInfoFromDatabase(function(err, data){
    if(err){
      res.sendStatus(500)
    }else{
      res.json(data)
    }
  });
});


//sends information to be inserted to the database
//checks if the task already exists *(line maybe deleted)* in the future

app.post('/tasks',function(req,res){

  let task = req.body.task;

  if(!task){
    res.sendStatus(400);
  }else{
    database.insertOne(task, (err, results)=>{
      if(err){
        console.log(posErr2);
        res.sendStatus(500);
      }else{
        res.status(200).json(results);
      }
    });
  }
});

module.exports = app;
