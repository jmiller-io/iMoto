var mongoose = require('mongoose');

var PartSchema = new mongoose.Schema({
  description: String,
  cost: Number,
  manufacturer: String,
  partNumber: String,
})

const Part = mongoose.model('Part', PartSchema);
module.exports = Part;
