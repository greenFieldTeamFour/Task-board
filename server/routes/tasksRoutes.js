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
  getConnection().query('INSERT INTO Tasks (task, progress) VALUES(?, 0)', [task], (err, results, fields ) => {
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
// update progress
add5 = (task, cb) => {
  getConnection().query("UPDATE Tasks SET progress = progress+5 WHERE (task)=?", [task], (err, results) => {
    if(err){
      console.log('There is something wrong with the update query', err);
      cb(err, null);
    } else {
      console.log(`Added 5 to ${task} progress bar`, results);
      cb(null, results);
    }
  })
}
tasksRoutes.post('/progress', (req,res) => {
  const task = req.body.task;
  if(!task){
    res.sendStatus(400);
    console.log(task);
  }else{
    add5(task, (err, results) => {
      if(err){
        res.sendStatus(500);
        console.log(err);
      }else{
        res.status(200).json(results);
      }
    });  
  }
});
sub5 = (task, cb) => {
  getConnection().query("UPDATE Tasks SET progress = progress-5 WHERE (task)=?", [task], (err, results) => {
    if(err){
      console.log('There is something wrong with the update query', err);
      cb(err, null);
    } else {
      console.log(`Substracted 5 to ${task} progress bar`, results);
      cb(null, results);
    }
  })
}
tasksRoutes.post('/progressminus', (req,res) => {
  const task = req.body.task;
  if(!task){
    res.sendStatus(400);
    console.log(task);
  }else{
    sub5(task, (err, results) => {
      if(err){
        res.sendStatus(500);
        console.log(err);
      }else{
        res.status(200).json(results);
      }
    });  
  }
});
// Displays all tasks in database
getInfoFromDatabase2 = (callback) => {
  getConnection().query('SELECT * FROM Habits', (err, data) => {
    if(err){
      callback(err, null);
    }else{
      callback(null, data)
    }
  });
};
tasksRoutes.get('/mastered', (req, res) => {
  getInfoFromDatabase2((err, data) => {
    if(err){
      res.sendStatus(500)
    }else{
      res.json(data)
    }
  });
});
module.exports = tasksRoutes