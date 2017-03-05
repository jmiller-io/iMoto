var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  motorcycles: []
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
