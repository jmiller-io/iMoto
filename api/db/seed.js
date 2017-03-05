require('./config')
// Require models
var User = require('../models/user.js');
var Motorcycle = require('../models/motorcycle.js');

var mcycle = new Motorcycle({
  year: 2009,
  make: 'Yamaha',
  model: 'FZ6'
})

var me = new User({name: 'Jake'})
me.motorcycles.push(mcycle);
me.save();
