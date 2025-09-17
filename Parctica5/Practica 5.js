//ejer1
let nombre = "Joan";   // variable con un valor
let variable = "Carlos"; // otra variable que podría coincidir

if (variable === nombre) {
    console.log(nombre);   // Imprime por consola tu nombre
}
//ejer2
let usercorrecto= "JMV";
let contraseñacorrecta= "1234"

let user = "JMV";
let contraseña = "1234";

if (usercorrecto === user && contraseñacorrecta && contraseña){
    console.log("datos correctos");
}else{
    console.log("datos incorrectos");

}

//ejer 3
let num = 4;

if (num === 0){
    console.log("es el numero 0")
}else if(num < 0){
    console.log("es un numero negativo")
}else{
    console.log("es un numero positivo")
}

//ejer4
let edadpersona=19;

if (edadpersona < 18){
    let anios= 18 - edadpersona;
    console.log(`le faltan ${anios} años para poder votar`);
}else {
    console.log("puede votar");
}

//ejer 5

let edad = 17;

let categoria = (edad >= 18) ? "adulto" : "menor";

console.log(categoria);

// ejer 6

let mes = 9;
let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
    estacion = "Invierno";
} else if (mes >= 3 && mes <= 5) {
    estacion = "Primavera";
} else if (mes >= 6 && mes <= 8) {
    estacion = "Verano";
} else if (mes >= 9 && mes <= 11) {
    estacion = "Otoño";
} else {
    estacion = "Mes inválido";
}

console.log(`Estamos en ${estacion}`);

//ejer 7

 mes = 2;
let dias;

switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dias = 31;
        break;
    case 4: case 6: case 9: case 11:
        dias = 30;
        break;
    case 2:
        dias = 28;
        break;
    default:
        dias = "Mes inválido";
}

console.log(`El mes ${mese} tiene ${dias} días`);

//ejer 8
let idioma=1;

switch (idioma) {
    case 1: console.log("hola");
            break;
    case 2: console.log("hello");
            break;
    case 3: console.log("Bonjour");
            break;
}
//ejer 9

mes = 4;


switch (mes) {
    case 12: case 1: case 2:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes inválido";
}

console.log(`Estamos en ${estacion}`);


