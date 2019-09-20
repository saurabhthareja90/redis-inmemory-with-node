const express = require('express');
const redis = require('redis');
var bodyParser = require("body-parser");
var path = require('path');

 const app = express();

 //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 const client = redis.createClient({
     host: 'redis-server',
     port: 6379
 });
 client.set('message','Hello World!! Redis is awesome.');

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
});

 app.get('/message', (req, res) => {
      client.get('message',(err, message) => {
        //res.sendFile('index.html');
        console.log("get message" + message);
         res.send(message);
     })
 });

 app.post('/update', function (req, res) {  
    var msg = req.body.data;
    console.log(req.body); 
    client.set('message',msg);
    console.log(msg);  
    res.send(msg);  
 });

 app.listen(8080, () => {
     console.log('Listening on port 8080');
 });