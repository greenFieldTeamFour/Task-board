// require the necessary libraries and routes
const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const tasksRoutes = require('./routes/tasksRoutes')
// create a new express instance
const app = express();
//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));
app.use(tasksRoutes)
// set port to listen, is going to be set eihter by the process or is going to be 3000
const port = (process.env.PORT || 3003);
// listening on 3000
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});