var mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
  description: String,
  cost: Number,
  performedAt: String,
  Date: Date
})

const ServiceRecord = mongoose.model('ServiceRecord', ServiceSchema);
module.exports = ServiceRecord;

module.exports = {
  ServiceRecord: ServiceRecord,
  ServiceSchema: ServiceSchema
};
