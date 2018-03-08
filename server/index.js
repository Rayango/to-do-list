const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
  res.send('hello world!');
})

app.listen(3000, () => console.log('Listening on port 3000!'))