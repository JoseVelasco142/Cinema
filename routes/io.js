

/*IO.on('connection', function(socket) {
    console.log('Connected to Socket');
});*/

var io = require('socket.io')();

io.sockets.on('connection', function(socket){
    // Test comunicación
    socket.on('connection', function(socket){
        console.log('Hello Clients');
    });

    // Servidor recibe asiento focuseado
    socket.on('focusing', function(sitid){
        io.sockets.emit('ReceiveFocused', sitid);
    });

    // Servidor recibe asiento dejado de focusear
    socket.on('unfocusing', function(sitid){
        io.sockets.emit('LeaveFocus', sitid);
    });


});

module.exports = io;

/*

 io.sockets.emit('an event sent to all connected clients');
 io.emit('an event sent to all connected clients');
 */