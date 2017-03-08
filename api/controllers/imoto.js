var Motorcycle = require('../models/motorcycle.js');

function getMotorcycles(request, response) {
  Motorcycle.find(function(error, motorcycles) {
    if(error) response.json({message: 'Could not find any motorcycles'});

    response.json({motorcycles: motorcycles});
  })
}

function createMotorcycle(request, response) {
  var moto = new Motorcycle(request.body);
  moto.save()
}

function getMotorcycle(request, response) {
  var id = request.params.id;

  Motorcycle.findById({_id: id}, function(error, motorcycle) {
    if (error) response.json({message: 'Could not find motorcycle b/c:' + error});

    response.json({motorcycle: motorcycle});
  })
}

function deleteMotorcycle(request, response) {
  var id = request.params.id;
  Motorcycle.remove({_id: id}, function(error) {
    if (error) response.json({message: 'Could not delete motorcycle b/c:' + error})

    response.json({message: 'Motorcycle successfully deleted'})
  })
}

module.exports = {
  getMotorcycles: getMotorcycles,
  createMotorcycle: createMotorcycle,
  getMotorcycle: getMotorcycle,
  deleteMotorcycle: deleteMotorcycle
}
