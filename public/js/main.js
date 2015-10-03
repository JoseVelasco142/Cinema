$(document).ready(function() {

    var socket = io();

    socket.on('connect', function(){
        console.log('Client connect OK');
        init();
    });

    var init = function(){
        $('#send').click(function(){
            aviso($('#msg').val());
        });
    };

    var aviso = function(msg){
        socket.emit('aviso_de_prueba', msg);
    };

    socket.on('respuesta', function(msg){
        $('#visor').append('<div style="height:50px; width:50px; background:grey;"'+'>El mensaje es:'+msg+'</div>');
    });
});



