//  Constructor de objetos
function Libro(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.leido = false;
}

// Array biblioteca
let biblioteca = [];

// Agregar libro
function agregarLibro(libro) {
    biblioteca.push(libro);
}

// Listar todos los libros
function listarLibros() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    biblioteca.forEach(libro => {
        let estado = libro.leido ? "Leído" : "No leído";
        let p = document.createElement("p");
        p.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio}) → ${estado}`;
        contenedor.appendChild(p);
    });
}

// Eliminar todos los libros
function deletebooks() {
    biblioteca = []; // vacía el array
    document.getElementById("lista").innerHTML = ""; // limpia el DOM
    alert("Se eliminaron todos los libros.");
}

// Contar libros
function countbooks() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    let p = document.createElement("p");
    p.textContent = `Hay ${biblioteca.length} libros en la biblioteca.`;
    contenedor.appendChild(p);
}

// Mostrar libros leídos
function mostrarLibrosLeidos() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    let leidos = biblioteca.filter(libro => libro.leido);

    if (leidos.length === 0) {
        contenedor.textContent = "No hay libros leídos.";
        return;
    }

    leidos.forEach(libro => {
        let p = document.createElement("p");
        p.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio}) ✅`;
        contenedor.appendChild(p);
    });
}

// Mostrar libros no leídos
function mostrarLibrosNoLeidos() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";

    let noLeidos = biblioteca.filter(libro => !libro.leido);

    if (noLeidos.length === 0) {
        contenedor.textContent = "Todos los libros han sido leídos.";
        return;
    }

    noLeidos.forEach(libro => {
        let p = document.createElement("p");
        p.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio}) ❌`;
        contenedor.appendChild(p);
    });
}

// Ordenar libros por año
function yearBook() {
    biblioteca.sort((a, b) => b.anio - a.anio);

    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = "";
    let ol = document.createElement("ol");

    for (let i = 0; i < biblioteca.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${biblioteca[i].titulo} (${biblioteca[i].anio})`;
        ol.appendChild(li);
    }

    contenedor.appendChild(ol);
}

// Marcar libro como leído
function marcarComoLeido(titulo) {
    let libro = biblioteca.find(l => l.titulo === titulo);
    if (libro) {
        libro.leido = true;
        alert(`El libro "${titulo}" se marcó como leído.`);
    } else {
        alert("No se encontró el libro.");
    }
}

// Eventos DOM
document.getElementById("btnAgregar").addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let anio = document.getElementById("anio").value;

    if (titulo && autor && anio) {
        let nuevo = new Libro(titulo, autor, anio);
        agregarLibro(nuevo);
        alert("Libro agregado.");
    } else {
        alert("Por favor completa todos los campos.");
    }
});

document.getElementById("btnLibrosordenadosanio").addEventListener("click", yearBook);
document.getElementById("btnLibroselminar").addEventListener("click", deletebooks);
document.getElementById("btnMostrar").addEventListener("click", listarLibros);
document.getElementById("btnLeido").addEventListener("click", () => {
    let titulo = document.getElementById("tituloLeido").value;
    marcarComoLeido(titulo);
});

//  Nuevos botones para mostrar leídos y no leídos
document.getElementById("btnLibrosLeidos").addEventListener("click", mostrarLibrosLeidos);
document.getElementById("btnLibrosNoLeidos").addEventListener("click", mostrarLibrosNoLeidos);
