var mongoose = require('mongoose');
var PartSchema = require('./part.js');
var ServiceRecordSchema = require('./service.js');

var MotorcycleSchema = new mongoose.Schema({
  year: Number,
  make: String,
  model: String,
  mileage: Number,
  purchasePrice: Number,
  purchaseDate: String,
  vin: String,
  licensePlate: String,
  insurance: {
    company: String,
    companyPhone: String,
    policyNumber: String
  },
  serviceRecords: [ServiceRecordSchema.ServiceSchema],
  parts: [PartSchema.PartSchema]
});

var Motorcycle = mongoose.model('Motorcycle', MotorcycleSchema);
module.exports = Motorcycle;
