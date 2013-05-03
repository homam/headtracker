var express = require('express');


var app = express.createServer();


app.use(express.directory(__dirname));

app.use(express.static(__dirname));


app.listen(8100);
