var IO = require('socket.io')();

/*IO.on('connection', function(socket) {
    console.log('Connected to Socket');
});*/

IO.sockets.on('connection', function(socket){

    socket.on('aviso_de_prueba', function(msg){
        socket.emit('respuesta', msg);
        console.log('El cliente dice '+ msg);
    });

});

module.exports = IO;