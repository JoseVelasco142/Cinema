var IO = require('socket.io')();

IO.on('connection', function(socket) {
    console.log('Connected to Socket');
});

module.exports = IO;