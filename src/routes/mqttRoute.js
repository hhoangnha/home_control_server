var express = require("express");
var router = express.Router();
var mqttController = require('../controllers/mqttController');
var controllerRoom1 = require('../controllers/controllerRoom1');
// var Controller = require("../controllers/ChatController");
// var checktoken = require("../middlewares/ChatMiddleware");

/* ---------------------------------------------------------------- */
router.get('/on', mqttController.on); 
router.get('/off', mqttController.off); 

/* ---------------------------------- room1 --------------------------------- */
router.get('/switch1/on', controllerRoom1.onSwitch1); 
router.get('/switch1/off', controllerRoom1.offSwitch1); 
router.get('/switch2', controllerRoom1.onSwitch2); 
router.get('/switch2/off', controllerRoom1.offSwitch2); 
router.get('/switch3', controllerRoom1.onSwitch3); 
router.get('/switch3/off', controllerRoom1.offSwitch3); 
router.get('/switch4', controllerRoom1.onSwitch4); 
router.get('/switch4/off', controllerRoom1.offSwitch4); 

module.exports = router;