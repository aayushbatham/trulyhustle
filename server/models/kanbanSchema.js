const mongoose = require('mongoose');

const kanbanSchema = new mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true, unique: true },
  columns: [{
    name: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
  }],
});

module.exports = mongoose.model('Kanban', kanbanSchema);
