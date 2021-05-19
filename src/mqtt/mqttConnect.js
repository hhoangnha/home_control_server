var mqtt = require('mqtt');

const mqttConnect = ()=>{
    var mqttConnectOption = {
        host: 'broker.hivemq.com',
        port: 1883,
        // protocol: 'mqtts',
        // username: 'nhanl3715@gmail.com',
        // password: 'Hoangnha123'
    }
    var mqttClient = mqtt.connect(mqttConnectOption);
    return mqttClient;
}
module.exports = mqttConnect;