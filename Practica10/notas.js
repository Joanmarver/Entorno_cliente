// Seleccionamos elementos del DOM
const inputNombre = document.getElementById("nombreAlumno");
//...AGREGA AQUÍ EL RESTO DE ELEMENTOS DEL DOM
const inputNota= document.getElementById("notaAlumno");
const btnAgregar= document.getElementById("agregarBtn");
const btnpromedio= document.getElementById("promedioBtn");
const divPromedio = document.getElementById("promedio");
const divResultado=document.getElementById("resultado");
// Arrays separados para nombres y notas
let nombres = [];
//...CREA UN ARRAY LLAMADO notas PARA ALMACENAR LAS NOTAS
let notas = [];

// Función para mostrar la lista de alumnos
function mostrarAlumnos() {
    divResultado.innerHTML = ""; // Limpiar div
    for (let i = 0; i < nombres.length; i++) {
        divResultado.innerHTML += `${i + 1}. ${nombres[i]} - Nota: ${notas[i]} <br>`;
    }
}

// Agregar alumno
btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();
    const nota = Number(inputNota.value);

    /*...CONDICIONAL QUE MUESTRE ERROR SI
    EL NOMBRE ESTÁ VACÍO
    LA NOTA NO ES UN NÚMERO
    LA NOTA ES MENOR QUE 0 O MAYOR QUE 10
    QUE DETENGA LA EJECUCIÓN DE LA FUNCIÓN Y SALGA DE ELLA
     */
    if (nombre === "" || isNaN(nota) || nota < 0 || nota > 10) {
        alert("error")
        return;
    }else{


    //... AÑADE LOS DATOS A LOS DOS ARRAYS CON EL MÉTODO PUSH
    nombres.push(nombre);
    notas.push(nota)}

    // Limpiar inputs
    inputNombre.value = "";
    inputNota.value = "";

    // Mostrar lista actualizada
    mostrarAlumnos();
});

// Calcular promedio
btnpromedio.addEventListener("click", function() {
    let promedio=0;
    //...SI NO HAY ELEMENTOS EN EL ARRAY DE NOTAS, QUE DETENGA LA FUNCIÓN Y SALGA DE ELLA
    if (notas.length < 1) {
        alert("el mensaje esta vacio");
    }else{
        let canttotal=0;
        for (let i =0; i<notas.length; i++) {
            canttotal+=notas[i];
        }
        promedio = canttotal/notas.length;
    }
    //...MOSTRANDO ALGÚN MENSAJE DE ERROR

    //...EXTRAER EL CONTENIDO DEL ARRAY NOTAS
    //...CALCULAR EL PROMEDIO Y PONERLO EN LA VARIABLE promedio

    divPromedio.textContent = `Promedio de notas: ${promedio.toFixed(2)}`;
});
