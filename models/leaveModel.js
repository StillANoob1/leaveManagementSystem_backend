const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  leaveType: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
