/**
 * Created by jose on 1/10/15.
 */
$(document).ready(function(){


    var sala = $('#sala');

    for(i = 0; i < 6; i++)
        for(j = 0; j < 8; j++)
            sala.append('<div id="sit-'+ j + '-' + i+'" class="cell">'+'</div>' );

    $('#llamada').click(function(){
        var llamada = $('#caja').val();
        alert(llamada);
    });
});