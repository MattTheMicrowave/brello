var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({

  'text' : String
});

module.exports = mongoose.model('Task', taskSchema);
