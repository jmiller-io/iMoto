var mongoose = require('mongoose');

var RidingGearSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number
});

var RidingGear = mongoose.model('RidingGear', RidingGearSchema);
module.exports = RidingGear;
