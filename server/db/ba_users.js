const mongoose = require('mongoose');

var users = new mongoose.Schema({
  usernmae: String,
  email: String,
  password: String,
  fullName: { type: String, default: '' },
  dob: { type: String, default: '' },
  address: { type: String, default: '' },
  gender: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },  
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', users);