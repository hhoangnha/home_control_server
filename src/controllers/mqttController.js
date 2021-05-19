var {TOPIC} = require('../utils/urlTopic');
var mqttConnect = require('../mqtt/mqttConnect')
var mqttClient = mqttConnect();

module.exports.on = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch1', '1');
    res.send({'msg':"on"})
};
module.exports.off = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch1', '0');
    res.send({'msg':"off"})
};