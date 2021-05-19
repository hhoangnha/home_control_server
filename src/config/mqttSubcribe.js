let mqttSubcribe  = (mqttClient)=>{
    mqttClient.subscribe('my/test/topic');
    mqttClient.subscribe('inTopic/nhanl');
}
module.exports = mqttSubcribe;