const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true },
  column: { type: mongoose.Schema.Types.ObjectId, ref: 'Column', required: true },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users collaborating on this task
});

module.exports = mongoose.model('Task', taskSchema);