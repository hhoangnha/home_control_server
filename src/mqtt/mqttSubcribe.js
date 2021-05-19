var {TOPIC} = require('../../utils/urlTopic');
var mqttSubcribeRoom1  = (mqttClient)=>{
    mqttClient.subscribe(TOPIC + 'switch1');
    mqttClient.subscribe(TOPIC + 'switch2');
    mqttClient.subscribe(TOPIC + 'switch3');
    mqttClient.subscribe(TOPIC + 'switch4');
}
module.exports = {
    mqttSubcribeRoom1: mqttSubcribeRoom1,
};