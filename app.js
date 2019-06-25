// Message in the console to show that file responded
console.log('server is starting');

// Require modules
var path = require('path');
var express = require('express');

// Declare app and point to index.ejs file
var app = express();
app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname, 'views'));
app.get('/', function(req,res){
	res.render('index');
});

// Congig express with midleware
app.use(express.static(path.resolve(__dirname,'public')));

//app.post();

//app.use(express.static(path.resolve(__dirname, 'public')))

// Listen to defined port and show message called by function listening
app.listen(process.env.PORT || 3000, listening);


// Functions
function listening(){
    console.log("listening...");
}

/*

const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end('<h1>eA </h1> <p><br>24/06/2019 14:46 - eA: estamos nas nuvens!<\p><p>24/06/2019 14:51 - eA: agradecimentos especiais a Leandro e Elias pelas dicas e palavras-chave.<\p>');	
});

server.listen(port,() => {
	console.log('Server running at port '+port);
});

*/