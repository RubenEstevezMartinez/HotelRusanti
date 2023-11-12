document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('hotel-form');
    const hotelList = document.getElementById('hotel-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    agregarHotel = function () {
        const cedula = document.getElementById('cedula').value;
        const nombre = document.getElementById('nombre').value;
        const habitacion = document.getElementById('habitacion').value;
        const reserva = document.getElementById('reserva').value;
        const personas = document.getElementById('personas').value;

        const newRow = hotelList.insertRow();
        newRow.innerHTML = `
            <td>${cedula}</td>
            <td>${nombre}</td>
            <td>${habitacion}</td>
            <td>${reserva}</td>
            <td>${personas}</td>
            <td>
            <button type="button" onclick="editarHotel(this)" data-action="editar">Editar</button>
            <button type="button" onclick="eliminarHotel(this)" data-action="eliminar">Eliminar</button>  
            </td>
        `;

        form.reset();
    };

    editarHotel = function (button) {
        const row = button.parentNode.parentNode;
        const cedula = row.cells[0].textContent;
        const nombre = row.cells[1].textContent;
        const habitacion = row.cells[2].textContent;
        const reserva = row.cells[3].textContent;
        const personas = row.cells[4].textContent;

        document.getElementById('cedula').value = cedula;
        document.getElementById('nombre').value = nombre;
        document.getElementById('habitacion').value = habitacion;
        document.getElementById('reserva').value = reserva;
        document.getElementById('personas').value = personas;

        row.parentNode.removeChild(row);
    };

    eliminarHotel = function (button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };
});
