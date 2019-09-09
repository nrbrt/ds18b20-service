const sensor = require('ds18b20-raspi');
const mqtt = require('mqtt')
const client = mqtt.connect('tcp://localhost')

function senddata(){
    setInterval(function(){
	client.publish('temp_sensors', JSON.stringify(sensor.readAllC(2)));
    }, 1);
}

senddata();
