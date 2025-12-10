$(document).ready(function(){
    // --- VARIABLES Y CONSTANTES GLOBALES ---
    const jugadores = [];
    const MIN_JUGADORES = 2; // Mínimo para empezar
    const BORED_API_URL = "https://www.boredapi.com/api/activity";
    let jugadorActualIndex = 0;

    // Preguntas locales para la opción "Truth"
    const VERDADES = [
        "¿Cuál es la cosa más extraña que has comido por accidente?",
        "¿Qué mentira inofensiva has contado hoy?",
        "Si pudieras vivir en cualquier lugar del mundo, ¿dónde sería y por qué?",
        "¿Cuál es tu peor hábito secreto?",
        "Si pudieras tener un superpoder, ¿cuál elegirías?",
        "¿Cuál fue el último video que te hizo reír a carcajadas en YouTube?",
        "¿Qué apodo odias que te pongan?",
        "¿Quién es la persona más famosa que tienes guardada en tu teléfono?"
    ];

    // --- FUNCIONES DE SOPORTE (SETUP) ---

    // 1. Actualiza la lista de jugadores y el estado del botón "Empezar"
    function actualizarSetup() {
        const listaHtml = $('#lista-jugadores');
        listaHtml.empty();

        if (jugadores.length > 0) {
            let badges = '';
            $.each(jugadores, function(index, jugador) {
                // Genera las etiquetas de Bootstrap para los nombres
                badges += `<span class="badge bg-secondary jugador-nombre me-2">${jugador.nombre}</span>`;
            });
            listaHtml.append(badges);
        } else {
            listaHtml.append('<p class="text-muted small mb-0">Aún no hay jugadores registrados.</p>');
        }

        // Habilitar/Deshabilitar el botón Empezar
        if (jugadores.length >= MIN_JUGADORES) {
            $('#BtnEmpezar').prop('disabled', false).removeClass('btn-secondary').addClass('btn-primary').text(`Empezar Juego (${jugadores.length} J.)`);
        } else {
            $('#BtnEmpezar').prop('disabled', true).removeClass('btn-primary').addClass('btn-secondary').text(`Necesitas ${MIN_JUGADORES - jugadores.length} jugador(es) más`);
        }
    }

    // --- FUNCIONES DE JUEGO PRINCIPALES ---

    // 2. Genera la interfaz de juego (llamada al hacer clic en Empezar)
    function generarInterfazJuego() {
        // Estructura principal de juego con Bootstrap grid
        const divJuego = $('<div class="container mt-5">');
        const row = $('<div class="row justify-content-center">');
        const col = $('<div class="col-md-8 text-center bg-white p-4 rounded shadow">');

        // Contenedor para el turno actual
        const turnoDiv = $(`<div class="alert alert-info" role="alert">
            Turno de: <strong id="currentPlayerName"></strong>
        </div>`);

        // Contenedor de Botones de Verdad o Reto
        const botonesDiv = $('<div class="d-grid gap-2 d-md-block mb-4">');
        const buttonJuegoVerdad = $('<button id="BtnVerdad" class="btn btn-warning btn-lg me-2">Verdad 😇</button>');
        const buttonJuegoReto = $('<button id="BtnReto" class="btn btn-danger btn-lg">Reto 💪</button>');
        botonesDiv.append(buttonJuegoVerdad).append(buttonJuegoReto);

        // Contenedor para el resultado del Reto/Verdad y los botones de puntuación
        const resultadoDiv = $('<div id="resultado-reto" class="mb-4"></div>');

        // Contenedor para el Marcador (Tabla de Clasificación)
        const marcadorDiv = $('<div id="marcador-container"></div>');

        // Ensamblaje
        col.append(turnoDiv).append(botonesDiv).append(resultadoDiv).append(marcadorDiv);
        row.append(col);
        divJuego.append(row);

        // Vaciar el body y añadir la interfaz de juego
        $("body").empty().append(divJuego);

        // Conectar eventos después de que los botones existan en el DOM
        $('#BtnVerdad').on('click', function(){ seleccionarOpcion('verdad'); });
        $('#BtnReto').on('click', function(){ seleccionarOpcion('reto'); });
    }

    // 3. Muestra la tabla de clasificación ordenada
    function mostrarMarcador() {
        const marcadorContainer = $('#marcador-container');
        marcadorContainer.empty();

        // Clonar y ordenar los jugadores por puntos (de mayor a menor)
        let clasificacion = jugadores.slice().sort((a, b) => b.puntos - a.puntos);

        // Actualiza el nombre del jugador actual
        $('#currentPlayerName').text(jugadores[jugadorActualIndex].nombre);

        // Generar la estructura de la tabla de clasificación
        const tablaClasificacion = $(`
            <table class="table table-striped table-hover mt-4 table-sm">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Jugador</th>
                        <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody id="tabla-cuerpo">
                </tbody>
            </table>
        `);

        marcadorContainer.append($('<h3 class="h5 mt-3">Clasificación</h3>')).append(tablaClasificacion);

        const tablaCuerpo = $('#tabla-cuerpo');

        // Llenar la tabla con los datos ordenados
        $.each(clasificacion, function(index, jugador) {
            // Clase especial si es el jugador actual
            let isCurrent = jugador.nombre === jugadores[jugadorActualIndex].nombre ? 'table-primary fw-bold' : '';

            let fila = $(`
                <tr class="${isCurrent}">
                    <th scope="row">${index + 1}</th>
                    <td>${jugador.nombre}</td>
                    <td><span class="badge bg-danger">${jugador.puntos}</span></td>
                </tr>
            `);
            tablaCuerpo.append(fila);
        });
    }

    // 4. Lógica de selección de Verdad/Reto (API)
    async function seleccionarOpcion(opcion) {
        // Deshabilitar botones de opción
        $('#BtnVerdad, #BtnReto').prop('disabled', true);

        const resultadoDiv = $('#resultado-reto');
        resultadoDiv.empty().append('<p class="text-warning"><i class="fas fa-spinner fa-spin"></i> Cargando desafío...</p>');

        let titulo = "";
        let texto = "";
        let puntosOtorgados = opcion === 'verdad' ? 3 : 5; // 3 pts por Verdad, 5 pts por Reto

        if (opcion === 'verdad') {
            titulo = "VERDAD SELECCIONADA 😇";
            const indice = Math.floor(Math.random() * VERDADES.length);
            texto = VERDADES[indice];
        } else { // Reto (API)
            titulo = "RETO SELECCIONADO 💪 (API)";
            try {
                const response = await fetch(BORED_API_URL);
                const data = await response.json();

                if (data.activity) {
                    texto = data.activity + ` <span class="badge bg-info text-dark">${data.type}</span>`;
                } else {
                    texto = "Error al obtener el reto de la API.";
                }
            } catch (error) {
                console.error("Error al obtener el reto de la API:", error);
                texto = "Ocurrió un error de conexión. Reto: ¡Haz 5 flexiones!";
            }
        }

        // Mostrar el resultado y la opción de puntuar
        const jugadorActual = jugadores[jugadorActualIndex];
        resultadoDiv.empty().append(`
            <div class="alert alert-secondary mt-3 text-start">
                <h4 class="alert-heading">${titulo}</h4>
                <p class="lead">${texto}</p>
                <hr>
                <p class="mb-2">¿${jugadorActual.nombre} completó el desafío?</p>
                <button id="BtnCompletado" data-puntos="${puntosOtorgados}" class="btn btn-success me-2">Sí, completado (+${puntosOtorgados} pts)</button>
                <button id="BtnFallado" class="btn btn-outline-danger">No / Paso</button>
            </div>
        `);

        // Habilitar los eventos de puntuación
        $('#BtnCompletado').on('click', manejarPuntuacion);
        $('#BtnFallado').on('click', siguienteTurno);
    }

    // 5. Suma puntos y avanza
    function manejarPuntuacion(e) {
        const puntos = parseInt($(e.target).data('puntos'));
        jugadores[jugadorActualIndex].puntos += puntos;

        // Limpiar el resultado y pasar al siguiente
        $('#resultado-reto').empty();
        siguienteTurno();
    }

    // 6. Avanza al siguiente turno
    function siguienteTurno() {
        // Avanza al siguiente jugador
        jugadorActualIndex = (jugadorActualIndex + 1) % jugadores.length;

        // Vuelve a habilitar los botones de opción (Verdad/Reto)
        $('#BtnVerdad, #BtnReto').prop('disabled', false);

        // Actualiza el marcador
        mostrarMarcador();
    }

    // 7. Inicia el juego (muestra la interfaz y el primer turno)
    function iniciarJuego() {
        generarInterfazJuego();
        mostrarMarcador();
    }

    // --- EVENTOS PRINCIPALES ---

    // Evento de Agregar Jugador
    $("#BtnAgregarJugador").on("click", function(){
        const nombre = $("#nombreJugador").val().trim();

        if (nombre === "") {
            alert("El nombre no puede estar vacío.");
            return;
        }

        let jugador = {
            nombre: nombre,
            puntos: 0
        };

        jugadores.push(jugador);
        $("#nombreJugador").val("").focus();

        // Llama a la función clave para actualizar la lista y el botón
        actualizarSetup();
    });

    // Evento de Empezar Juego
    $("#BtnEmpezar").on("click", function(){
        if (jugadores.length >= MIN_JUGADORES) {
            iniciarJuego();
        } else {
            alert(`Faltan jugadores para empezar. Mínimo ${MIN_JUGADORES}.`);
        }
    });

    // Inicialización al cargar la página
    actualizarSetup();
});