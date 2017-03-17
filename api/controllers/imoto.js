const Part = require('../models/part.js');
var Motorcycle = require('../models/motorcycle.js');
var RidingGear = require('../models/ridinggear.js');

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

function updatePart(request, response) {
  //console.log(request.body)
  var edits = {$set: request.body}
  console.log(edits)

  Motorcycle.findById(request.params.motoid, function(err, moto) {
    var subDoc = moto.parts.id(request.params.partid);
    subDoc.set(request.body)
    moto.save().then(function(savedMoto) {
      console.log(savedMoto)
    })
  })
}
//   Motorcycle.findOneAndUpdate({
//     _id: request.params.motoid,
//     "parts.id": request.params.partid
//     },
//     {
//       $set: {
//         'parts.$.part' : request.body
//       }
//     },
//       function(err, moto){
//         if(err) console.log(err)
//         console.log(moto)
//       });
// }

// function removePart(request, response) {
//   var motoid = request.params.motoid
//   var partid = request.params.partid
//  // cant get this to work moving on to something else for now
// }


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
  getGear: getGear,
  createGear: createGear,
  removeGear: removeGear,
  updateGear: updateGear
};
