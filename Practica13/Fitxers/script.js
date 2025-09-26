// Constructor de objetos
function Libro(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.leido = false;
  }
  
  // Array biblioteca
  let biblioteca = [];
  
  // Función para agregar libro
  function agregarLibro(libro) {
    biblioteca.push(libro);
  }

  // Función para listar libros en el DOM
  function listarLibros() {
    let contenedor = document.getElementById("lista");
    contenedor.innerHTML = ""; // limpiar antes de mostrar
  
    biblioteca.forEach(libro => {
      let estado = libro.leido ? "Sí" : "No";
      let p = document.createElement("p");
      p.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio}) ${estado}`;
      contenedor.appendChild(p);
    });
  }
  //eliminar libros
  function deletebooks(){
      let contenedor = document.getElementById("lista");
      contenedor.innerHTML = "";
      for (let i = 0; i < biblioteca.length; i++) {
          biblioteca.length = 0;
      }
  }
  //contar libros
  function countbooks(){
      let contenedor = document.getElementById("lista");
      contenedor.innerHTML = "";

      let cont=0;
      for (let i = 0; i < biblioteca.length;i++){
          cont++;
      }
      let p = document.createElement("p");
      p.textContent= ` hay ${cont} libros`;
      contenedor.appendChild(p);
      console.log(cont);
  }
  function notRead(){

      let notread =[];
      let contenido = document.getElementById("lista");
      contenido.innerHTML = "";
      let ol=document.createElement("ol");
      for (let i = 0; i < biblioteca.length;i++){
          if(biblioteca[i].leido === false) {
              notread.push(biblioteca[i]);
          }
      }
      for(let i=0;i<notread.length;i++){
          let li= document.createElement("li");
          li.textContent = `${biblioteca[i].titulo} (${biblioteca[i].anio}) \n`
          ol.appendChild(li);
      }
      contenido.appendChild(ol);


  }

function read(){

    let read =[];
    let contenido = document.getElementById("lista");
    contenido.innerHTML = "";
    let ol=document.createElement("ol");
    for (let i = 0; i < biblioteca.length;i++){
        if(biblioteca[i].leido === true) {
            read.push(biblioteca[i]);
        }
    }
    for(let i=0;i<read.length;i++){
        let li= document.createElement("li");
        li.textContent = `${biblioteca[i].titulo} (${biblioteca[i].anio}) \n`
        ol.appendChild(li);
    }
    contenido.appendChild(ol);


}

  function yearBook(){
      biblioteca.sort((a,b) => b.anio - a.anio);
      let contenido;
      let contenedor = document.getElementById("lista");
      contenedor.innerHTML = "";
      let ol=document.createElement('ol');
      for (let i = 0; i < biblioteca.length;i++){
          let li= document.createElement("li");
          li.textContent = `${biblioteca[i].titulo} (${biblioteca[i].anio}) \n`
          ol.appendChild(li);
      }

      contenedor.appendChild(ol);



  }


  // Función para marcar como leído
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


    document.getElementById("btnLibrosordenadosanio").addEventListener("click", () => {
    yearBook();
    });


    document.getElementById("btnMostrar").addEventListener("click", listarLibros);
  document.getElementById("btnLeido").addEventListener("click", () => {
    let titulo = document.getElementById("tituloLeido").value;
    marcarComoLeido(titulo);
  });
  document.getElementById("btnCantidadLibros").addEventListener("click", countbooks);
  document.getElementById("btnLibrosNoLeidos").addEventListener("click", notRead);
  document.getElementById("btnLibrosLeidos").addEventListener("click", read);
  document.getElementById("btnLibroseliminar").addEventListener("click", deletebooks);