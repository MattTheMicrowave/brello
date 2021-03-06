var express = require('express');
var router = express.Router();
var TaskModel = require('../models/TaskModel.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  TaskModel.find(function(err, tasks){
    res.render('index', {
      title: 'Express',
      tasks: tasks
    });
});
});

/* POST Create a task. */
router.post('/tasks', function(req, res, next) {
var task = new TaskModel({
  text : req.body.text
});

task.save(function(err, task){
  res.redirect('/');
});
});

module.exports = router;
