var socket = io();

// socket.on es para escuchar al servidor 
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// socket.on es para escuchar al servidor 
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

// socket.on es para escuchar al servidor
socket.on('enviarMensaje', function(mensaje){
    console.log('Mensaje desde el Servidor', mensaje);
}); 

// socket.emit es para enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Fabio Paredes',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('Respuesta Serve: ', resp);
});