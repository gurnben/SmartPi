const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
app.use(morgan('dev'));
app.get('/', (req, res) => {
	res.write('Hello');
	res.end();
	console.log('Server was hit!');
});
app.listen(3000);
module.exports = app;
console.log('Server running on port 3000');
