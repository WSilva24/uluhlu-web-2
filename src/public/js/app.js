// $(function () {
//     alert("Usando JQuery")
// })

$(document).ready(function () {

    // $("#tarea").focus();

    $('#obtenerProductos').on('click', function () {
        $.ajax({
            url: '/listar_tareas',
            success: function (data) {
                console.log(data)
                var tbody = $('tbody');

                tbody.html('');
                data.forEach(data => {
                    tbody.append(`
                    <tr>
                        <td class="id">${data._id}</td>
                        <td>
                            <input type="text" class="tarea" value="${data.tarea}">
                        </td>
                        <td>
                            <button class="update">Actualizar</button>
                            <button class="delete">Eliminar</button>
                        </td>
                    </tr>
                    `)
                })
            }
        })
    })

    $('#formularioProductos').on('submit', function (e) {
        e.preventDefault();
        var newTarea = $('#nuevaTarea').val();

        $.ajax({
            url: '/guardar_tarea',
            method: 'POST',
            data: {
                tarea: newTarea
            },
            success: function (response) {
                $('#obtenerProductos').click();
            }
        })
    })

    $('table').on('click', '.update', function() {
        var row = $(this).closest('tr');
        var id = row.find('.id').text();
        var tarea = row.find('.tarea').val();

        $.ajax({
            url: '/tarea/' + id,
            method: 'PUT',
            data: {
                tarea: tarea
            },
            success: function (response) {
                console.log(response)
            }
        })

    })

    $('table').on('click', '.delete', function() {
        var row = $(this).closest('tr');
        var id = row.find('.id').text();

        $.ajax({
            url: '/tarea/' + id,
            method: 'DELETE',
            success: function (response) {
                console.log(response)
                $('#obtenerProductos').click();
            }
        })

    })

})