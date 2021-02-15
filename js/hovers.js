$('#entidad').hover(function () {
    $('#instruccion').html("Seleccionar la entidad a ubicar donde se realizara la consulta.");
});

$('#borrar').hover(function () {
    $('#instruccion').html("Limpia los campos de seleccion de tablas, condicion y valor.");
});

$('#consulta').hover(function () {
    $('#instruccion').html("Verifica si la consulta puede ser realizada, manda los resultados a esta seccion.");
});

$('.consultas').hover(function () {
    $('#instruccion').html("Seleccionar las tablas, sus condiciones y/o valores.");
});

$('img').hover(function () {
    $('#instruccion').html("Click para habilitar o deshabilitar las entidades. Las entidades opacas estan deshabilitadas.<br>Nota: Al deshabilitar solamente se deshabilita su base de datos, no afecta en la conexion a las demas entidades.");
});

$('[data-toggle="modal"]').hover(function () {
    $('#instruccion').html("Informacion sobre la app web.");
});

$('button').hover(function () {
    if ($(this).html() == 'Marcar' || $('button').html() == 'Desmarcar')
        $('#instruccion').html("Marca o desmarca todos los campos de su respectiva tabla.");
});

$('.resultado').hover(function () {
    $('#instruccion').html("Coloca el puntero en otra seccion o boton para saber su descripcion. <br>Esta seccion es de resultados e informacion.");
});

$('#todo').hover(function () {
    $('#instruccion').html("Marca o desmarca todas las selecciones de los campos de las tablas.");
});