var mqtt = require('mqtt')
const express = require('express')
const mqttConnect = require('./src/config/mqttConnect');
const mqttSubcribe = require('./src/config/mqttSubcribe');
const app = express()
const port = process.env.PORT || 3000

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


var mqttClient = mqttConnect();
mqttSubcribe(mqttClient);
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})