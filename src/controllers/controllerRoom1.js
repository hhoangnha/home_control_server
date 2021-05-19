var {TOPIC} = require('../utils/urlTopic');
var mqttConnect = require('../mqtt/mqttConnect')
var mqttClient = mqttConnect();

module.exports.onSwitch1 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch1', '1');
    res.send({'msg':"on"})
};
module.exports.offSwitch1 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch1', '0');
    res.send({'msg':"off"})
};

module.exports.onSwitch2 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch2', '1');
    res.send({'msg':"on"})
};
module.exports.offSwitch2 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch2', '0');
    res.send({'msg':"off"})
};

module.exports.onSwitch3 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch3', '1');
    res.send({'msg':"on"})
};
module.exports.offSwitch3 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch3', '0');
    res.send({'msg':"off"})
};

module.exports.onSwitch4 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch4', '1');
    res.send({'msg':"on"})
};
module.exports.offSwitch4 = async (req, res) => {
    mqttClient.publish(TOPIC + 'switch4', '0');
    res.send({'msg':"off"})
};