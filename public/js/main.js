$(document).ready(function() {

    function init(){
        // Prepara la interfaz
        $('#sala, #datablock, #states').hide();
    }

    // Click en alguna pelicula
    $('.film').click(function(){
        $('#visor').hide();
        $('#datablock, #sala, #states' ).show();
    });

    // Cerrar la vista de sala
    $('#back').click(function(){
        $('#sala, #states, #datablock').hide();
        $('#visor').show();
    });

    // Creacion de los asientos
    for (var j = 1; j <= 7; j++) {
        for (var i = 1; i <= 16; i++) {

    // Lo agrupa por columnas
            if (i <= 4) {
                $('#left-side').append('<div class="sit" id="sit-' + j + '-' + i + '">' + '</div>');
            } else if (i >= 4 && i <= 12) {
                $('#center').append('<div class="sit" id="sit-' + j + '-' + i + '">' + '</div>');
            } else {
                $('#right-side').append('<div class="sit" id="sit-' + j + '-' + i + '">' + '</div>');
            }
        }
    }

    // Variables globales
    var socket = io();
    var sit=$('.sit');
    var sitInfoBlock = $('.text');

    // Test comunicación
    socket.on('connect', function(){
        console.log('Hello Server');
    });

    // Tu marcas un asiento
    sit.click(function(){
        selectedSit = $(this).attr("id");
        ID=$('#'+selectedSit);
        sitInfo = selectedSit.split('-');
        sitInfoBlock.html('');
        if(ID.css('background-color') == 'rgb(255, 0, 0)'){
            alert('ese asiento ya esta reservado por alguien');
        }else{
            sitInfoBlock.html('Fila '+sitInfo[1]+' asiento nº '+sitInfo[2]);
        }
    });

    //Confirmas la reserva de un asiento
    $('#confirm').click(function(){
        if( sitInfoBlock.html() != '') {
            socket.emit('reservation', selectedSit);
            sitInfoBlock.html('');
        }else{
            alert('Debes marcar un asiento primero');
        }
    });

    //Alguien reserva un asiento
    socket.on('reserve', function(selectedSit){
        ID=$('#'+selectedSit);
        ID.css('backgroundColor','red');
    });

    // Tu focuseas un asiento
    sit.mouseenter(function(){
        sitid = $(this).attr("id");
        ID=$('#'+sitid);
        if(ID.css('background-color') == 'rgb(255, 255, 255)') {
            socket.emit('focusing', sitid);
        }
    });

    // Dejas de focusear un asiento
    sit.mouseleave(function(){
        socket.emit('unfocusing', sitid);
    });

    //Alguien esta focuseando un asiento
    socket.on('ReceivedFocus', function(sitid){
        ID=$('#'+sitid);
        ID.css('backgroundColor','orange');
    });

    //Alguien deja de focusear un asiento
    socket.on('LeaveFocus', function(sitid){
        ID=$('#'+sitid);
        if(ID.css('background-color') != 'rgb(255, 0, 0)') {
            ID.css('backgroundColor','white');
        }
    });

    init();
});





