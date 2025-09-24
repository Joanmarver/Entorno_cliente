let ejeruno= function (a,b){
    return a + b;
}
console.log(ejeruno(4,5));

//ejer2
let array=[1,2,3,4,5,6,7];
let ejerdos=function(a){
    let nummayor=0;
    for(let i=0;i<a.length;i++){
        if (a[i]>nummayor){
            nummayor=a[i];
        }
    }
    return nummayor;
}
console.log(ejerdos(array));

//ejer3
let strin="lfgbpierng";
let vocales= "aeiouAEIOU";
let ejer3= function (a,b){
    let cont=0;
    for(let letra  of a){
        if (b.includes(letra)){
            cont++
        }
    }
    return cont;
}
console.log(ejer3(strin,vocales));

//ejer4
let arrastrings= ["sjrg","sdogn","repkg"];
let ejer4= function (a){
    let arraystringsdos=[];
    for(let i=0;i<a.length;i++){
        arraystringsdos.push(a[i].toUpperCase());
    }
    return arraystringsdos;
}
console.log(ejer4(arrastrings));

//ejer5
let num=4;
let ejercinco= function (a){
    for (let i=0;i<Math.sqrt(a);i++){
        if (a%i===0){
            return false;
        }
    }
}
console.log(ejercinco(num))
//ejer 6

let arrayuno=[1,2,3,4,5,6,7,8,9,0,2,5,7,9,4,23,1,3];
let arraydos=[1,4,6,7,234,4325,456,75,21,4,6,7,423]

let ejerseis=function (a, b){
    let arraycomun=[];
    for(let numuno of a){
        for (let numdos of b){
            if (numdos === numuno && !arraycomun.includes(numdos)){
               arraycomun.push(numdos);
            }
        }
    }
    return arraycomun;
}
console.log(ejerseis(arrayuno,arraydos));

//ejer7
let arraynumeroejersiete=[1,3,4,6,2]
let ejersiete=function (a){
    let num=0;
    for (let i=0;i<a.length;i++){
        if (a[i]%2===0){
            num = num + a[i];
        }
    }
    return num;
}

//ejer8

let arraynumeros=[1,2,3,4,5];
let ejerocho=function (a){
    let arraycuadrado=[];
    for (let i =1; i<a.length;i++) {
         let num = a[i] * a[i];
        arraycuadrado.push(num);
    }
    return arraycuadrado;
}
console.log(ejerocho(arraynumeros));

//ejer9

let string="ejfbnekojg";
function ejernueve(a) {
    return a.split("").reverse().join("");
}

console.log(ejernueve(string));

//ejer10

function ejerdiez(num) {
    if (num < 0) return "es un numero negativo";
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(ejerdiez(5))
