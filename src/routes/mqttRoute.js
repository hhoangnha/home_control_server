var express = require("express");
var router = express.Router();
var mqttController = require('../controllers/mqttController');
// var Controller = require("../controllers/ChatController");
// var checktoken = require("../middlewares/ChatMiddleware");

/* ---------------------------------------------------------------- */
router.get('/on', mqttController.on); 
router.get('/off', mqttController.off); 
module.exports = router;