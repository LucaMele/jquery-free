var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/demo'));
app.use(express.static(__dirname + '/dist'));

console.log('');
console.log('Server is running on port 3000');


http.createServer(app).listen(3000);