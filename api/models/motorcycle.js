var mongoose = require('mongoose');

var MotorcycleSchema = new mongoose.Schema({
  year: Number,
  make: String,
  model: String
});

var Motorcycle = mongoose.model('Motorcycle', MotorcycleSchema);
module.exports = Motorcycle;
