const express = require('express')
const tasksRoutes = express.Router()
const getConnection = require('./getConnection.js')
// Displays all tasks in database
getInfoFromDatabase = (callback) => {
  getConnection().query('SELECT * FROM Tasks', (err, data) => {
    if(err){
      callback(err, null);
    }else{
      callback(null, data)
    }
  });
};
tasksRoutes.get('/tasks', (req, res) => {
  getInfoFromDatabase((err, data) => {
    if(err){
      res.sendStatus(500)
    }else{
      res.json(data)
    }
  });
});
// post
insertOne = (task, cb) => {
  getConnection().query('INSERT INTO Tasks (task) VALUES(?)', [task], (err, results, fields ) => {
    if(err) {
      console.log('There is something wrong with the insert query', err);
      cb(err, null);
    } else {
      console.log(`Added ${task} with the following info:`, results);
      cb(null, results);
    }
  });
};
tasksRoutes.post('/tasks', (req,res) => {
  const task = req.body.task;
  if(!task){
    res.sendStatus(400);
    console.log(task);
  }else{
    insertOne(task, (err, results) => {
      if(err){
        res.sendStatus(500);
        console.log(err);
      }else{
        res.status(200).json(results);
      }
    });  
  }
});
// delete
deleteOne = (task, cb) => {
  getConnection().query("DELETE FROM Tasks WHERE (task)=?", [task], (err, results, fields) => {
    if(err){
      console.log('There is something wrong with the delete query', err);
      cb(err, null);
    } else {
      console.log(`Deleted ${task} with the following info:`, results);
      cb(null, results);
    }
  });
};
tasksRoutes.delete('/tasks', (req, res) => {
  const task = req.body.task;
  console.log(`Deleted task: ${task}`);
  deleteOne(task, (err, results) => {
    if(err){
      res.sendStatus(500);
      console.log(err);
    }else{
      res.status(200).json(results);
    }
  })
  
})
// Displays an specific task in database
tasksRoutes.get('/tasks/:id', (req, res) => {
  console.log(`Fetching task with id: ${req.params.id}`);
  const queryString = "SELECT * FROM Tasks WHERE id = ?" // whatever we type inside [ ] is going to be the id, we can change the query a little bit in order to get users by other columns
  const taskId = req.params.id
  getConnection().query(queryString, [taskId], (err, rows, fields) => {
    if(err) {
      console.log(`Failed to query for Tasks: ${err}`)
      res.sendStatus(500)
      return
    }
    console.log('I think we fetched Tasks correctly');
    res.json(rows)
  })
}) 

module.exports = tasksRoutes