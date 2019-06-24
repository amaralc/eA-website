const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end('<h1>20190624 1440 - estado da Arte entra no ar</h1>');
});

server.listen(port,() => {
	console.log('Server running at port '+port);
});