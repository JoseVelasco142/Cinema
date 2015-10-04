$(document).ready(function() {

    // Declaracion de variables

    var init = function(){
        // Prepara la interfaz
        $('#sala','#datablock','#states').hide();
    };


    // Click en alguna pelicula
    $('.film').click(function(){
        $('#visor').hide();
        $('#datablock', '#sala','#states' ).show();
    });

    // Cerrar la vista de sala
    $('#back').click(function(){
        $('#sala','#states','#datablock').hide();
        $('#visor').show();
    });


    // Creacion de los asientos
    for (var j = 1; j <= 10; j++) {
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


    var socket = io();

    var sit=$('.sit');

    // Test comunicación
    socket.on('connect', function(){
        console.log('Hello Server');
    });

    // Alguien reserva un asiento
    sit.click(function(){
        sitid = $(this).attr("id");
        $('')

    });


    // Alguien focusea un asiento
    sit.mouseenter(function(){
        sitid = $(this).attr("id");
        socket.emit('focusing', sitid);
    });

    // Focuseas focusea un asiento
    sit.mouseleave(function(){
        socket.emit('unfocusing', sitid);
    });

    //Alguien deja de focusear un asiento
    socket.on('ReceiveFocused', function(sitid){
        ID=$('#'+sitid);
        ID.css('backgroundColor','orange');
    });

    //Alguien esta focuseando un asiento
    socket.on('LeaveFocus', function(sitid){
        ID=$('#'+sitid);
        ID.css('backgroundColor','white');

    });

    init();
});





