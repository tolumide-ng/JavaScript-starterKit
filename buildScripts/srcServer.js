const express = require('express');
const open = require('open');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './../src/index.html'));
});

app.listen(port, (err) => {
	err ? console.log(err) : open('http://localhost:' + port);
});
