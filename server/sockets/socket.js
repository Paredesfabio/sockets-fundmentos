const {  io } = require('../server');

io.on('connection', (client)=>{

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion',
        fecha: `Fecha: ${new Date().getDate()}/${ new Date().getUTCMonth() + 1  }/${ new Date().getFullYear() } ${ new Date().getHours() }:${ new Date().getMinutes() }`
    });

    // se captura cuando un usuario se desconecto
    // o cerro la pestana o cerro el navegador
    client.on('disconnect', ()=>{
        console.log('Usuario Desconectado');
    });

    // escuchar al cliente
    // enviar mensaje es el nombre con el que se emite
    // desde el cliente
    client.on('enviarMensaje', (data, callback)=>{

        console.log(data);

        // emite a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', { data });
        // if( mensaje.usuario ){
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'TODO SALIO MAL !!!!!!!!!!'
        //     });
        // }

    });

});