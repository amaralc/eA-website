const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end('<h1>eA </h1> <p><br>24/06/2019 14:46 - eA: estamos nas nuvens!<\p><p>24/06/2019 14:51 - eA: agradecimentos especiais a Leandro e Elias pelas dicas e palavras-chave.<\p>');	
});

server.listen(port,() => {
	console.log('Server running at port '+port);
});