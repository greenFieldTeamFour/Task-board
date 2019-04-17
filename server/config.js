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
app.get('/tasks', function(req, res){
  databaseInfo.getInfoFromDatabase(function(err, data){
    if(err){
      res.sendStatus(500)
    }else{
      res.json(data)
    }
  });
});

module.exports = app;
