var mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
  description: String,
  cost: Number,
  performedAt: String
  Date: Date
})

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;
