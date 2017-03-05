require('./config')
// Require models
// var User = require('../models/user.js');
var Motorcycle = require('../models/motorcycle.js');

var mcycle = new Motorcycle({
  year: 2009,
  make: 'Yamaha',
  model: 'FZ6'
})
mcycle.save();

var mcycle2 = new Motorcycle({
  year: 2017,
  make: 'Honda',
  model: 'CRF250L Rally'
})
mcycle2.save();


var mcycle3 = new Motorcycle({
  year: 2016,
  make: 'Yamaha',
  model: 'FZ09'
})
mcycle3.save();
// var me = new User({name: 'Jake'})
// me.motorcycles.push(mcycle);
// me.save();
