var mqttConnect = require('../config/mqttConnect')
var mqttClient = mqttConnect();

module.exports.on = async (req, res) => {
    mqttClient.publish('inTopic/nhanl', '0');
    res.send({'msg':"off"})
};
module.exports.off = async (req, res) => {
    mqttClient.publish('inTopic/nhanl', '1');
    res.send({'msg':"on"})
};