
var express = require('express');
var app = express();

/* Aqui estara toda la funcionalidad de los socket, es recomendable usar el moudlo http
   para pasarle la app a express y manejar bien http */
var server = require('http').Server(app);


var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.status(200).send("Hola mundo");
});

server.listen(3005, function(){
    console.log("El servidor esta corriendo en http://localhost:3005");
});