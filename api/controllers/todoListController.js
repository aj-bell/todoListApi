/****************
 * In this controller, we would be writing five(5) different functions namely: list_all_tasks,
 * create_a_task, read_a_task, update_a_task, delete_a_task.
 ****************/

'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res){
    Task.find({}, function(err, task){
        if(err)                //if there's an error, send the error. Otherwise send the json object.
            res.send(err);
        res.json(task);
    });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res){
    Task.findById(req.params.taskId, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function(req, res){
    Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_task = function(req, res){
    Task.remove({
        _id: req.params.taskId
    }, function(err, task){
        if(err)
            res.send(err);
        res.json({ message: 'Task successfully deleted'});
    });
};

