/*Creamos variable que permita la conexion entre back y front */

var socket = io.connect('http://localhost:3005', {'forceNew': true});
// Esto manda al servidor el mensaje de connect y aparece en consola

// El cliente manejara datos mediante mensajes, esto se llamaran evento y se mostraran por consola en el navegador

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render (data){

    var html = `<div>
                    <strong>${data.autor}</strong>:
                    <em>${data.texto}</em>
                </div>`

    document.getElementById('messages').innerHTML = html;

}