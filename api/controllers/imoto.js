const Part = require('../models/part.js');
const Motorcycle = require('../models/motorcycle.js');
const RidingGear = require('../models/ridinggear.js');
const ServiceRecord = require('../models/service.js');

function getMotorcycles(request, response) {
  Motorcycle.find(function(error, motorcycles) {
    if(error) response.json({message: 'Could not find any motorcycles'});

    response.json({motorcycles: motorcycles});
  })
}

function createMotorcycle(request, response) {
  var moto = new Motorcycle(request.body);
  moto.save(function(error) {
    if (error) response.json({message: 'Could not create motorcycle b/c: ' + error})
      response.json({message: 'Created motorcycle'})
  })
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

function createPart(request, response) {
  var id= request.params.id;
  var part = new Part.Part(request.body)
  Motorcycle.findById(request.params.id, function(error, motorcycle) {
    motorcycle.parts.push(part)
    motorcycle.save(function(error) {
      if (error) response.json({message: 'Could not create part b/c: ' + error})
        response.json({part: part})
    })
  })
}

function createServiceRecord(request, response) {
  var id= request.params.id;
  var serviceRecord = new ServiceRecord.ServiceRecord(request.body)
  Motorcycle.findById(request.params.id, function(error, motorcycle) {
    motorcycle.serviceRecords.push(serviceRecord)
    motorcycle.save(function(error) {
      if (error) response.json({message: 'Could not create service record b/c: ' + error})
        response.json({serviceRecord: serviceRecord})
    })
  })
}

function updateServiceRecord(request, response) {
  Motorcycle.findById(request.params.motoid, function(err, moto) {
    var subDoc = moto.serviceRecords.id(request.params.serviceRecordid);
    subDoc.set(request.body)
    moto.save(function(error) {
      if (error) response.json({message: 'Could not update service record b/c: ' + error})
        response.json({message: 'Service Record created successfully'})
    })
  })
}

function removeServiceRecord(request, response) {
  Motorcycle.findById(request.params.motoid, function(err, moto) {
    let serviceRecord = moto.serviceRecords.id(request.params.serviceRecordid)
    serviceRecord.remove(function(err) {
      if (err) response.json({message: 'Could not remove Service Record b/c: ' + err})
      response.json({message: 'Service Record removed successfully'})
      moto.save()
    })
  })
}


function updatePart(request, response) {
  Motorcycle.findById(request.params.motoid, function(err, moto) {
    var subDoc = moto.parts.id(request.params.partid);
    subDoc.set(request.body)
    moto.save(function(error) {
      if (error) response.json({message: 'Could not update part b/c: ' + error})
        response.json({message: 'Part created successfully'})
    })
  })
}

function removePart(request, response) {
  Motorcycle.findById(request.params.motoid, function(err, moto) {
    let part = moto.parts.id(request.params.partid)
    part.remove(function(err) {
      if (err) response.json({message: 'Could not remove part b/c: ' + err})
      response.json({message: 'Part removed successfully'})
      moto.save()
    })
  })
}


function getGear(request, response) {
  RidingGear.find(function(error, gear) {
    if (error) response.json({message: 'Could not find any gear'})

    response.json({gear: gear})
  })
}

function createGear(request, response) {
  var gear = new RidingGear(request.body)
  gear.save(function(error) {
    if (error) response.json({message: 'Could not create gear b/c: ' + error})
      response.json({gear: gear})
  })
}

function removeGear(request, response) {
  let id = request.params.id
  RidingGear.remove({_id: id}, function(error) {
    if (error) response.json({message: 'Could not delete gear b/c:' + error})
    response.json({message: 'Riding Gear successfully deleted'})
  })
}

function updateGear(request, response) {
  console.log(request.body)
  RidingGear.update({_id: request.params.id}, {$set: request.body}, function(error) {
    if (error) response.json({message: 'Could not update gear b/c:' + error})
    response.json({message: 'Riding Gear successfully updated'})
  })
}

module.exports = {
  getMotorcycles: getMotorcycles,
  createMotorcycle: createMotorcycle,
  getMotorcycle: getMotorcycle,
  deleteMotorcycle: deleteMotorcycle,
  createPart: createPart,
  updatePart: updatePart,
  removePart: removePart,
  createServiceRecord: createServiceRecord,
  updateServiceRecord: updateServiceRecord,
  removeServiceRecord: removeServiceRecord,
  getGear: getGear,
  createGear: createGear,
  removeGear: removeGear,
  updateGear: updateGear
};
