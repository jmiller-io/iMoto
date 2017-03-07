var mongoose = require('mongoose');

var PartSchema = new mongoose.Schema({
  description: String,
  cost: Number,
  manufacturer: String,
  partNumber: String,
  installDate: Date
})

const Part = mongoose.model('Part', PartSchema);
module.exports = Part;
