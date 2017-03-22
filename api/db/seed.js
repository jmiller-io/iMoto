require('./config')
// Require models
// var User = require('../models/user.js');
var Motorcycle = require('../models/motorcycle.js');
var RidingGear = require('../models/ridinggear.js');

var mcycle = new Motorcycle({
  year: 2009,
  make: 'Yamaha',
  model: 'FZ6',
  mileage: 23450,
  vin: '1J309CJ3BB3J',
  purchasePrice: 4800,
  purchaseDate: '3/25/2009',
  licensePlate: '22U940',
  insurance: {
    company: 'State Farm',
    companyPhone: '(555) 555-5555',
    policyNumber: '192-HFVA-2700'
  },
})
mcycle.save();

var mcycle2 = new Motorcycle({
  year: 2017,
  make: 'Honda',
  model: 'CRF250L Rally',
  mileage: 57000,
  vin: '3LF4F20VI48G',
  purchasePrice: 5000,
  licensePlate: 'FASTR'
})
mcycle2.save();


var mcycle3 = new Motorcycle({
  year: 2016,
  make: 'Yamaha',
  model: 'FZ09',
  mileage: 1500,
  vin: '39CJH3HFJ2KDO2',
  purchasePrice: 7200,
  licensePlate: 'MYAMMY'
})
mcycle3.save();

var mcycle4 = new Motorcycle({
  year: 2016,
  make: 'Ducati',
  model: 'Scrambler',
  mileage: 3570,
  vin: '28FH20VJ2JFH29J',
  purchasePrice: 8500,
  licensePlate: '44EJWP'
})
mcycle4.save();
// var me = new User({name: 'Jake'})
// me.motorcycles.push(mcycle);
// me.save();

var gear1 = new RidingGear({
  brand: 'Alpinestars',
  model: 'Viper Air',
  price: 149.99
})

gear1.save()


var gear2 = new RidingGear({
  brand: 'HJC',
  model: 'CL-17 Redline Hi-Viz Helmet',
  price: 104
})

gear2.save()
