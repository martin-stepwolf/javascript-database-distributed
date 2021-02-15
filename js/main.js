$(document).ready(function () {
    let error = false;
    var tablacatalogo;

    $("img").click(function () {
        if ($(this).attr("title") == "Localidad Deshabilitada")
            $("#" + $(this).attr("id"))
            .attr({ "title": "Localidad Habilitada", "style": "opacity: 1;" }, "slow");
        else $("#" + $(this).attr("id"))
                .attr({ "title": "Localidad Deshabilitada", "style": "opacity: 0.5;" }, "slow");
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
})  