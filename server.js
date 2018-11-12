const http = require('http');
const express = require('express');
const morgan = require('morgan');
var path = require('path');
const Gpio = require('onoff').Gpio;
const led = new Gpio(14, 'out');
const favicon = require('serve-favicon');

const app = express();
const server = http.createServer(app);
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
	res.status(200);
});
app.get('/favicon')
app.post('/on', (req, res) => {
	led.writeSync(1);
	res.redirect('/');
});
app.post('/off', (req, res) => {
	led.writeSync(0);
	res.redirect('/');
});
app.listen(80);
module.exports = app;
console.log('Server running on port 80');
