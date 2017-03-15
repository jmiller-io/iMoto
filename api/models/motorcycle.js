var mongoose = require('mongoose');

var MotorcycleSchema = new mongoose.Schema({
  year: Number,
  make: String,
  model: String,
  mileage: Number,
  purchasePrice: Number,
  vin: String,
  licensePlate: String,
  insurance: {
    company: String,
    companyPhone: String,
    policyNumber: String
  },
  serviceRecords: [],
  parts: []
});

var Motorcycle = mongoose.model('Motorcycle', MotorcycleSchema);
module.exports = Motorcycle;
