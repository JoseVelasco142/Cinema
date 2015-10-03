$(document).ready(function() {

    var socket = io();
    var casa = 'nada';

    $('.usernameInput').mouseenter(function(){
       console.log($(this).val());
        socket.emit('new message', $(this).val());
    });

      // tell server to execute 'new message' and send along one parameter
    socket.emit('new message', casa);



    // Whenever the server emits 'stop typing', kill the typing message
    socket.on('stop typing', function (casa) {
    });
});



