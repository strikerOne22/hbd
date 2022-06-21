$(()=>{
    // Listado de apodos ingresados
    let apodos = [];

    // Accion cuando presione el botón
    $('#btnEntrada').click( event =>{
        event.preventDefault();

        // Cambiando el value del botón
        $('#btnEntrada').val('👀');
        setTimeout(()=>{$('#btnEntrada').val('Enviar 🤫');}, 3000);

        
        let texto = $('#entrada').val().toUpperCase();

        apodos.push($('#entrada').val());

        if(texto === "KIRIN"){
            alerta('Te digo así, pero no es el apodo oficial 🙄',1);
        }else if(texto === "MESHU"){
            alerta('Uhm, casi! Por una letra!!! 🤭',1);
        }else if(texto === ""){
            alerta('😡😡😡 ¡TENÉS QUE PONER ALGO! 😡😡😡',1);
        }else if(texto === "MECHU"){
            $('#btnEntrada').hide();
            $('#entrada').val('hbd, mechu 🥰');
            $('#formulario').css({'margin-top':'5px'});
            $('#entrada').prop('readonly', true);
            alerta('Toca el pastel para continuar',2);
            $('#nav').show();
        }else{
            alerta('🙄🙄🙄 VEEEE, ¿cuándo te digo así? 🙄🙄🙄',1);
        }
    });

    $('#btnCake').click(event=>{
        event.preventDefault();
        miTexto = /*html*/ `
            <strong>Feliz cumpleaños, mechu! ❤️ </strong> Que me alegra que hayas llegado a este día para que cumplas un año más. ✨
            Pues, creo que solo llevamos como dos años hablando como amigos, pero CREEME que han sido los mejores, como dice una canción pagana de un loco porayy, <cite>- tu amistad me hace bien - <cite> 🐍 y es que en cada oportunidad me dejas una enseñanza, y me gusta que sea así. En otras ocasiones sí me caes muy mal 😒😒 más por tus gustos musicales, 🙃 pero ni modo, <strong>¿qué le podemos hacer? 😔</strong> y jajaja la cosa es felicitarte por tu cumpleaños! 🥰🥳🥳 <br>
            Que Dios te siga bendiciendo con salud, con amor, con alegría, con sabiduría y que sobretodo te conceda el milagro de la Salvación 🤗, espero que vengas al camino de Cristo! 🤭 Ya no sé que más decirte, jajaja 😅 pero diré que quise hacerte este detalle desde hace un mes! Pero no he tenido mucho tiempo, la cuestión es el resultado! 😎
            <br>
            <img class="img-fluid img-thumbnail rounded" src="foto.jpeg">
            <br>
            <strong>Te quiero, viejita! 👵🏽</strong>
        `;
        $('#miTexto').html(miTexto);
    });

    $('#btnGhost').click(event=>{
        event.preventDefault();
        alerta('Decía PASSSTEEEEEL 😐');
        miTexto = "Figura irreal, imaginaria o fantástica y normalmente incorpórea, que alguien cree ver; especialmente, imagen de una persona fallecida que se aparece a alguien.";
        $('#miTexto').html(miTexto);
    });

    $('#btnAlien').click(event=>{
        event.preventDefault();
        alerta('Decía PASSSTEEEEEL 😐');
        miTexto = "En la cultura popular y en la ufología, se denomina extraterrestre a todo ser vivo originario de cualquier sitio ajeno a la Tierra.​ La mayor parte de las personas solo tiene en cuenta esta definición al referirse a los seres provenientes del espacio exterior.";
        $('#miTexto').html(miTexto);
    });

    // console.log(apodos);

});

function alerta(texto, id){
    let alerta = /*html*/ `
        <div class="alert alert-warning mt-2 text-center" role="alert">
            ${texto}
        </div>
    `;
    $('#divAlertas').html(alerta);
    setTimeout(()=>{$('#divAlertas').empty();}, 3000);
    if(id==1){
        limpiarForm();
    }
}

function limpiarForm(){
    $('#formulario').trigger("reset");
}
