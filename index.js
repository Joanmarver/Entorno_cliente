// ejer 1
console.log("hola" + "manuel")

//ejer 2

let cadena = "texto"
let cont=0;
for (let i=1; i <= cadena.length; i++) {
    cont++;
}
console.log("hay " + cont + " letras");

//ejer 3
let string="hola"
for (let i= 0 ; i <= string.length; i++) {
    if (i == 0){
        console.log("el primer caracter es " + string.charAt(i));
    }else  if(i == string.length -1){
        console.log("el ultimo caracter es " + string.charAt(i));
    }
}
//ejer 4

let nombre = "JOAN"
let apellidos ="marques"
nombre = nombre.toLowerCase();
apellidos = apellidos.toUpperCase();
console.log(nombre);
console.log(apellidos);

//ejer 5

let cadenaVariaslineas="Quiero aprender\n" + "JavaScript"
console.log(cadenaVariaslineas);

//ejer 6
let name = "Joan";
let edad = 20;

let presentacion =`hola ${name}, tienes  ${edad}. `;

console.log(presentacion);

//ejer 7
let texto = "JavaScript es muy buen lenguaje";
let resultado = texto.replace(/ /g, "-");

console.log(resultado);

//ejer 8
let cadenaTexto = "hola mi amigo";
if(cadenaTexto.includes("holap")){
    console.log("si tiene esa palabra");
}else{
    console.log("no tiene ese palabra");
}
//ejer 9
let texto9 ="hola";
let texto10= "hola";
if(texto9===texto10 ){
    console.log("son iguales")
}else{
    console.log("no son iguales");
}
//ejer 10

if (texto9.length = texto10){
    console.log("tienen la misma longitud");
}else{
    console.log("no tienen la misma longitud");

}
