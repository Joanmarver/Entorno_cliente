$(document).ready(function () {
    const btnAgregarContacto = $("#btnAgregarContacto");
    const btnImportante = $("#btnImportante");
    const inputBuscar=$("#inputBuscar");
    const log = $("#log");

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    contactos.forEach(c => mostrarContacto(c));
    function guardarContacto() {
        localStorage.setItem("contactos", JSON.stringify(contactos));
    }


    function mostrarContacto(contacto) {

        const color = contacto.important ? "orange" : "black";

        log.append(`
        <p id="c-${contacto.id}" style="color: ${color}">
            <strong>Nombre:</strong> ${contacto.nombre} | 
            <strong>Teléfono:</strong> ${contacto.phone} |
            <strong>Email:</strong> ${contacto.email} |
            <button class="botoneliminarBtn" data-id="${contacto.id}">eliminar</button>
        </p>
    `);
    }


    btnImportante.on("click", function () {
        const nombre = $("#name").val();
        const phone = $("#telefono").val();
        const email = $("#email").val();

        let contacto = {
            id: Date.now(),
            nombre,
            phone,
            email,
            important: true
        };

        contactos.push(contacto);   // ⬅️ IMPORTANTE
        guardarContacto();
        mostrarContacto(contacto);
    });
    btnAgregarContacto.on("click", function () {
        const nombre = $("#name").val();
        const phone = $("#telefono").val();
        const email = $("#email").val();

        let contacto = {
            id: Date.now(),
            nombre,
            phone,
            email,
            important: false
        };

        contactos.push(contacto);   // ⬅️ IMPORTANTE
        guardarContacto();
        mostrarContacto(contacto);
    });

    $(document).on("click", ".botoneliminarBtn", function () {
        const id = Number($(this).data("id"));



        contactos = contactos.filter(c => c.id !== id);

        localStorage.setItem("contactos", JSON.stringify(contactos));

        $(`#c-${id}`).remove();
    });


    inputBuscar.on("input", function () {
        const texto = $(this).val().toLowerCase();
        log.empty();

        contactos
            .filter(c => c.nombre && c.nombre.toLowerCase().includes(texto))
            .forEach(c => mostrarContacto(c));
    });


});
