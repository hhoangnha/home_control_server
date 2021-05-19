var mqtt = require('mqtt')
const express = require('express')
const mqttConnect = require('./src/config/mqttConnect');
const app = express()
const port = 3000

// CORS
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type, Authorization, Content-Type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use("/mqtt", require("./src/routes/mqttRoute"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})


//initialize the MQTT client
// var client = mqtt.connect(mqttConnectOption);

var mqttClient = mqttConnect();
//setup the callbacks
mqttClient.on('connect', function () {
    console.log('Connected');
});

mqttClient.on('error', function (error) {
    console.log(error);
});

mqttClient.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// // subscribe to topic 'my/test/topic'
mqttClient.subscribe('my/test/topic');
mqttClient.subscribe('inTopic/nhanl');

// // publish message 'Hello' to topic 'my/test/topic'
// client.publish('my/test/topic', 'Hello');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })