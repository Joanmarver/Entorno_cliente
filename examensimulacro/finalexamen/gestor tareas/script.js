$(document).ready(function () {

    // Cargar tareas guardadas
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    mostrarTareas();

    // Añadir tarea nueva
    $("#tareaForm").on("submit", function (e) {
        e.preventDefault();

        let nombre = $("#nombreTarea").val().trim();
        let prioridad = $("#prioridad").val();

        let nuevaTarea = {
            id: Date.now(),
            nombre: nombre,
            prioridad: prioridad,
            completada: false
        };

        tareas.push(nuevaTarea);
        guardarTareas();
        mostrarTareas();

        this.reset();
    });

    // Delegación de eventos: completar y eliminar tarea
    $("#listaTareas")
        .on("click", ".completar", function () {
            let id = $(this).closest(".tarea").data("id");
            let tarea = tareas.find(t => t.id === id);
            tarea.completada = !tarea.completada;
            guardarTareas();
            mostrarTareas();
        })
        .on("click", ".eliminar", function () {
            let id = $(this).closest(".tarea").data("id");
            tareas = tareas.filter(t => t.id !== id);
            guardarTareas();
            mostrarTareas();
        });

    // Guardar en localStorage
    function guardarTareas() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Mostrar tareas en pantalla
    function mostrarTareas() {

        $("#listaTareas").empty();

        tareas.forEach(t => {

            let prioridadClase = "";

            if (t.prioridad === "baja") {
                prioridadClase = "prioridad-baja";
            } else if (t.prioridad === "media") {
                prioridadClase = "prioridad-media";
            } else if (t.prioridad === "alta") {
                prioridadClase = "prioridad-alta";
            }


            let completadaClase = t.completada ? "tarea-completada" : "";

            let tareaHTML = `
                <div class="tarea ${completadaClase}" data-id="${t.id}">
                    <h3>${t.nombre}</h3>
                    <p class="${prioridadClase}">Prioridad: ${t.prioridad}</p>
                    <div class="botones">
                        <button class="completar">Completar</button>
                        <button class="eliminar">Eliminar</button>
                    </div>
                </div>
            `;

            $("#listaTareas").append(tareaHTML);
        });
    }


});
