var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var imotoController = require('../controllers/imoto');

// http://127.0.0.1:3000/motorcycles
router.route('/motorcycles')

  // GET all motorcycles
  .get(imotoController.getMotorcycles)

  // POST a new motorcycle
  .post(imotoController.createMotorcycle)


router.route('/motorcycles/:id')

  // GET specific motorcycle
  .get(imotoController.getMotorcycle)

  // DELETE specific motorcycle
  .delete(imotoController.deleteMotorcycle)

  //UPDATE specific motorcycle
  .put(imotoController.updateMotorcycle)


router.route('/motorcycles/:id/part')

  // POST a New Part
  .post(imotoController.createPart)

router.route('/motorcycles/:motoid/part/:partid')

  // DELETE a Part not working
  .delete(imotoController.removePart)

  // Update a Part
  .put(imotoController.updatePart)


router.route('/motorcycles/:id/servicerecord')

  // POST a new Service Record
  .post(imotoController.createServiceRecord)

router.route('/motorcycles/:motoid/serviceRecord/:serviceRecordid')

  // DELETE service record
  .delete(imotoController.removeServiceRecord)

  // Update a Service Record
  .put(imotoController.updateServiceRecord)


router.route('/gear')
  // GET all gear
  .get(imotoController.getGear)

  // POST a new gear
  .post(imotoController.createGear)

router.route('/gear/:id')
  // DELETE a piece of Gear
  .delete(imotoController.removeGear)

  // Update a Piece of Gear
  .put(imotoController.updateGear)

module.exports = router;
