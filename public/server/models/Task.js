const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  tech: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: true
  },
  targetDate: {
    type: Date,
    required:true
  },
  links: {
    type: Array
  },
  completed: {
    type: Boolean,
    default: false,
    required:true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  updateDate: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
