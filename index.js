$(document).ready(function () {
    Borrar();
    document.getElementById("tabla").innerHTML = '<tr><td><h6>Localidad</h6></td><td><h6>Tabla</h6></td></tr>';
    var error = false;
    var tablacatalogo;
    $("img").click(function () {
        var id = $(this).attr("id");
        var titulo = $(this).attr("title");
        if (titulo == "Localidad Deshabilitada") {
            $("#" + id).attr({ "title": "Localidad Habilitada" }, "slow");
            $("#" + id).attr({ "style": "opacity: 1;" }, "slow");
            ;
        }
        else {
            $("#" + id).attr({ "title": "Localidad Deshabilitada" }, "slow");
            $("#" + id).attr({ "style": "opacity: 0.5;" }, "slow");
        }
    });
    $("button").click(function () {
        if ($(this).attr("id") == "todo")
            todo();
        else
            if ($(this).attr("id") == "consulta")
                $(".resultado").fadeOut(100, function () {
                    $('#mensaje').html('Esperando consulta...')
                    Consulta();
                    $(".resultado").fadeIn(1000, function () {
                    });
                });
            else {
                if ($(this).attr("id") == 'borrar')
                    $(".resultado, .consultas").fadeOut(100, function () {
                        Borrar();
                        $(".resultado, .consultas").fadeIn(1000, function () {
                        });
                    });
                else
                    if (($("#" + $(this).attr("id")).text()) == "Marcar") {
                        $("#" + $(this).attr("id")).html("Desmarcar");
                        $("input[name=" + $(this).attr("id") + "]").each(function () {
                            $(this)[0].checked = true;
                        })
                    }
                    else {
                        $("#" + $(this).attr("id")).html("Marcar");
                        $("input[name=" + $(this).attr("id") + "]").each(function () {
                            $(this)[0].checked = false;
                        });
                    }
            }
    });
    function Consulta() {
        var vacio = false;
        error = false;
        LimpiaTabla();
        Catalogo($("#entidad").val());
        if ($('input[value=a1]').prop('checked') || $('input[value=a2]').prop('checked') ||
            $('input[value=a3]').prop('checked') || $('input[value=a4]').prop('checked') ||
            $('input[value=a5]').prop('checked') || $('input[value=a6]').prop('checked')) {
            vacio = true;
            if ($('#titulo').val() == 'Lic' && $('#condicion').val() == '=')
                Verifica('Alumno1a');
            if ($('#titulo').val() == 'Ing' && $('#condicion').val() == '=')
                Verifica('Alumno2a');
            if ($('#titulo').val() != 'Ing' && $('#titulo').val() != 'Lic' && $('#condicion').val() == '=') {
                $('#mensaje').html('No se puede realizar la consulta');
                error = true;
                LimpiaTabla();
            }
            if ($('#titulo').val() == 'Lic' && $('#condicion').val() == '!=')
                Verifica('Alumno2a');
            if ($('#titulo').val() == 'Ing' && $('#condicion').val() == '!=')
                Verifica('Alumno1a');
            if ($('#titulo').val() != 'Ing' && $('#titulo').val() != 'Lic' && $('#condicion').val() == '!=') {
                Verifica('Alumno1a');
                Verifica('Alumno2a');
            }
            if ($('#condicion').val() == '') {
                Verifica('Alumno1a');
                Verifica('Alumno2a');
            }
        }
        if ($('input[value=b1]').prop('checked') || $('input[value=b2]').prop('checked') ||
            $('input[value=b3]').prop('checked') || $('input[value=b4]').prop('checked')) {
            vacio = true;
            if ($('#titulo').val() == 'Lic' && $('#condicion').val() == '=')
                Verifica('Alumno1b');
            if ($('#titulo').val() == 'Ing' && $('#condicion').val() == '=')
                Verifica('Alumno2b');
            if ($('#titulo').val() != 'Ing' && $('#titulo').val() != 'Lic' && $('#condicion').val() == '=') {
                $('#mensaje').html('No se puede realizar la consulta');
                error = true;
                LimpiaTabla();
            }
            if ($('#titulo').val() == 'Lic' && $('#condicion').val() == '!=')
                Verifica('Alumno2b');
            if ($('#titulo').val() == 'Ing' && $('#condicion').val() == '!=')
                Verifica('Alumno1b');
            if ($('#titulo').val() != 'Ing' && $('#titulo').val() != 'Lic' && $('#condicion').val() == '!=') {
                Verifica('Alumno1b');
                Verifica('Alumno2b');
            }
            if ($('#condicion').val() == '') {
                Verifica('Alumno1b');
                Verifica('Alumno2b');
            }
        }
        if ($('input[value=m1]').prop('checked') || $('input[value=m2]').prop('checked') ||
            $('input[value=m3]').prop('checked') || $('input[value=m4]').prop('checked') ||
            $('input[value=m5]').prop('checked')) {
            vacio = true;
            Verifica('Maestro');
        }
        if ($('input[value=n1]').prop('checked') || $('input[value=n2]').prop('checked') ||
            $('input[value=n3]').prop('checked')) {
            vacio = true;
            Verifica('Materia');
        }
        if ($('input[value=c1]').prop('checked') || $('input[value=c2]').prop('checked') ||
            $('input[value=c3]').prop('checked')) {
            vacio = true;
            Verifica('Carrera');
        }
        if ($('input[value=d1]').prop('checked') || $('input[value=d2]').prop('checked') ||
            $('input[value=d3]').prop('checked') || $('input[value=d4]').prop('checked') ||
            $('input[value=d5]').prop('checked')) {
            vacio = true;
            Verifica('Califica');
        }
    };
    function Verifica(tablav) {
        if (error == false) {
            $('#mensaje').html('Si se puede realizar la consulta');
            for (var i = 0; i < 8; i++) {
                if (tablacatalogo[i][0] == tablav) {
                    if ($('#' + tablacatalogo[i][1]).attr("title") == 'Localidad Habilitada')
                        Añadir(tablacatalogo[i][1], tablav);
                    else
                        if ($('#' + tablacatalogo[i][2]).attr("title") == 'Localidad Habilitada')
                            Añadir(tablacatalogo[i][2], tablav);
                        else
                            if ($('#' + tablacatalogo[i][3]).attr("title") == 'Localidad Habilitada')
                                Añadir(tablacatalogo[i][3], tablav);
                            else {
                                $('#mensaje').html('No se puede realizar la consulta');
                                error = true;
                                LimpiaTabla();
                            }
                }
            }
        }
    };
    function Añadir(loc, tab) {
        document.getElementById("tabla").innerHTML +=
            '<tr><td>' + loc + '</td><td>' + tab + '</td></tr>';
    };
    function todo() {
        if ($('#todo').html() == "Marcar todo") {
            $('#todo').html("Desmarcar todo");
            $("#alumno").html("Desmarcar");
            $("#maestro").html("Desmarcar");
            $("#materia").html("Desmarcar");
            $("#carrera").html("Desmarcar");
            $("#califica").html("Desmarcar");
            $("input[name=alumno]").each(function () {
                $(this)[0].checked = true;
            });
            $("input[name=maestro]").each(function () {
                $(this)[0].checked = true;
            });
            $("input[name=materia]").each(function () {
                $(this)[0].checked = true;
            });
            $("input[name=carrera]").each(function () {
                $(this)[0].checked = true;
            });
            $("input[name=califica]").each(function () {
                $(this)[0].checked = true;
            });
        }
        else {
            $('#todo').html("Marcar todo");
            $("#alumno").html("Marcar");
            $("#maestro").html("Marcar");
            $("#materia").html("Marcar");
            $("#carrera").html("Marcar");
            $("#califica").html("Marcar");
            $("input[name=alumno]").each(function () {
                $(this)[0].checked = false;
            });
            $("input[name=maestro]").each(function () {
                $(this)[0].checked = false;
            });
            $("input[name=materia]").each(function () {
                $(this)[0].checked = false;
            });
            $("input[name=carrera]").each(function () {
                $(this)[0].checked = false;
            });
            $("input[name=califica]").each(function () {
                $(this)[0].checked = false;
            });
        }
    }

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
    function Borrar() {
        $('#todo').html('Marcar todo');
        $('#mensaje').html('Esperando consulta...')
        LimpiaTabla();
        $("select").val("");
        $("#entidad").val("L1");
        $("#condicion").val("");
        $("#condicion").val("");
        $(".vaciado").val("");
        $("#alumno").html("Marcar");
        $("#maestro").html("Marcar");
        $("#materia").html("Marcar");
        $("#carrera").html("Marcar");
        $("#califica").html("Marcar");
        $("input[name=alumno]").each(function () {
            $(this)[0].checked = false;
        });
        $("input[name=maestro]").each(function () {
            $(this)[0].checked = false;
        });
        $("input[name=materia]").each(function () {
            $(this)[0].checked = false;
        });
        $("input[name=carrera]").each(function () {
            $(this)[0].checked = false;
        });
        $("input[name=califica]").each(function () {
            $(this)[0].checked = false;
        });
    };

    function LimpiaTabla() {
        document.getElementById("tabla").innerHTML = '<tr><td><h6>Localidad</h6></td><td><h6>Tabla</h6></td></tr>';
    }
    function Catalogo(entidad) {
        if (entidad == 'L1')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l2', 'l9'],
                ['Alumno2a', 'l3', 'l8'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l3', 'l4', 'l8'],
                ['Materia', 'l1', 'l5', 'l7'],
                ['Carrera', 'l2', 'l9'],
                ['Califica', 'l1', 'l6', 'l7']]
        if (entidad == 'L2')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l2', 'l9'],
                ['Alumno2a', 'l3', 'l8'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l3', 'l4', 'l8'],
                ['Materia', 'l1', 'l5', 'l7'],
                ['Carrera', 'l2', 'l9'],
                ['Califica', 'l1', 'l6', 'l7']]
        if (entidad == 'L3')
            tablacatalogo = [
                ['Alumno1a', 'l6', 'l1'],
                ['Alumno1b', 'l2', 'l9'],
                ['Alumno2a', 'l3', 'l8'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l3', 'l4', 'l8'],
                ['Materia', 'l1', 'l5', 'l7'],
                ['Carrera', 'l2', 'l9'],
                ['Califica', 'l6', 'l1', 'l7']]
        if (entidad == 'L4')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l9', 'l2'],
                ['Alumno2a', 'l8', 'l3'],
                ['Alumno2b', 'l4', 'l5'],
                ['Maestro', 'l4', 'l8', 'l3'],
                ['Materia', 'l5', 'l7', 'l1'],
                ['Carrera', 'l9', 'l2'],
                ['Califica', 'l7', 'l1', 'l6']]
        if (entidad == 'L5')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l9', 'l2'],
                ['Alumno2a', 'l3', 'l8'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l4', 'l3', 'l8'],
                ['Materia', 'l5', 'l1', 'l7'],
                ['Carrera', 'l9', 'l2'],
                ['Califica', 'l1', 'l6', 'l7']]
        if (entidad == 'L6')
            tablacatalogo = [
                ['Alumno1a', 'l6', 'l1'],
                ['Alumno1b', 'l2', 'l9'],
                ['Alumno2a', 'l3', 'l8'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l3', 'l4', 'l8'],
                ['Materia', 'l5', 'l1', 'l7'],
                ['Carrera', 'l2', 'l9'],
                ['Califica', 'l6', 'l1', 'l7']]
        if (entidad == 'L7')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l9', 'l2'],
                ['Alumno2a', 'l8', 'l3'],
                ['Alumno2b', 'l4', 'l5'],
                ['Maestro', 'l8', 'l4', 'l3'],
                ['Materia', 'l7', 'l5', 'l1'],
                ['Carrera', 'l9', 'l2'],
                ['Califica', 'l7', 'l1', 'l6']]
        if (entidad == 'L8')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l9', 'l2'],
                ['Alumno2a', 'l8', 'l3'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l8', 'l4', 'l3'],
                ['Materia', 'l7', 'l5', 'l1'],
                ['Carrera', 'l9', 'l2'],
                ['Califica', 'l7', 'l1', 'l6']]
        if (entidad == 'L9')
            tablacatalogo = [
                ['Alumno1a', 'l1', 'l6'],
                ['Alumno1b', 'l9', 'l2'],
                ['Alumno2a', 'l8', 'l3'],
                ['Alumno2b', 'l5', 'l4'],
                ['Maestro', 'l8', 'l4', 'l3'],
                ['Materia', 'l5', 'l7', 'l1'],
                ['Carrera', 'l9', 'l2'],
                ['Califica', 'l7', 'l6', 'l1']]
    };
})  