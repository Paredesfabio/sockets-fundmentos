const express = require('express');
// LIBRERIAS PARA SOCKET IO
const sockeIO = require('socket.io');
const http = require('http');
// LIBRERIAS PARA SOCKET IO
const path = require('path');
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = MANTIENE UNA CONEXION DEL BACKEND
//let io = sockeIO(server);
module.exports.io = sockeIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});