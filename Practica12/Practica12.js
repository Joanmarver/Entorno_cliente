
const persona ={
    nombre:"joan",
    edad:20,
    nacimiento:2004
};
console.log(persona);
persona.apellido="Marqués";
delete persona.edad;
console.log(persona);
persona.saludar=function (){
    return console.log("holaa");
}
console.log(persona.saludar());

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

const personados={
    nombre:"joan",
    edad:20,
    nacimiento:2004,
    dirección:{
        calle : "Pau casals",
        ciudad: "Borriana"
    }
}

console.log(personados);
console.log(persona === personados);

console.log(persona.nombre === personados.nombre);
