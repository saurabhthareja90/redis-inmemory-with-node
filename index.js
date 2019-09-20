const express = require('express');

 const app = express();

 client.set('message','Hello World!! Redis is awesome.');

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
});


 app.listen(8080, () => {
     console.log('Listening on port 8080');
 });