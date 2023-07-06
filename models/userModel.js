const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  casualLeaves: {
    type: Number,
    default: 2
  },
  sickLeaves: {
    type: Number,
    default: 2
  },
  totalLeaves:{
    type:Number,
    default:4
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
