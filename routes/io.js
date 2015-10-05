
var io = require('socket.io')();

io.sockets.on('connection', function(socket){
    // Test comunicación
    socket.on('connection', function(socket){
        console.log('Hello Clients');
    });

    // Servidor recibe asiento focuseado
    socket.on('focusing', function(sitid){
        socket.broadcast.emit('ReceivedFocus', sitid);
    });

    // Servidor recibe asiento dejado de focusear
    socket.on('unfocusing', function(sitid){
        socket.broadcast.emit('LeaveFocus', sitid);
    });

    // Servidor recibe confirmacion de reserva
    socket.on('reservation', function(selectedSit){
       io.sockets.emit('reserve', selectedSit);
    });

});

module.exports = io;