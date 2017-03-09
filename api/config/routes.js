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

  .put(imotorController.editMotorcycle)

module.exports = router;
