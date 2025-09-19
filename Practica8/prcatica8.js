//ejer1

function uno(){
    for (let i=0;i<=20;i++){
        console.log(i);
    }
}
uno();

function dos(){
    let cant=0;
    for (let i=0;i<=100;i++){
        cant +=i;
    }
    console.log(cant);
}
dos();

function tres(){
    for(i=-1;i<=50;i++){
        i++;
        console.log(i);
    }
}
tres();
function cuatro(){
    let array =["Ana", "Banana","Joan","Pau"];
    for (let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
cuatro();
function cinco(){
    let a= "wgvtoeeirbgreg2";
    a= a.toLowerCase();
    let cont=0;
    for (let i=0; i < a.length;i++){
        if (a.charAt(i)=='a' || a.charAt(i)=='e' || a.charAt(i)=='i' || a.charAt(i)=='o' || a.charAt(i)=='u' ){
            cont++;

        }
    }
    console.log(cont);
}
cinco();

function seis(){
    let prod=1;
    let a=[1,2,3,4,5,6,7,8,9,10]
    for (let i=1;i<a.length;i++){
        prod*=i;

    }
    console.log(prod);
}
seis();

function siete(){
    let cinco=5;
    for (let i=1;i<=10;i++){
        console.log(cinco * i );
    }
}
siete();



function ocho(){
    let cadena="kwrebgñkqwej";
    let invertir=""
    for (let i=cadena.length;i>=0;i--){
        invertir += cadena[i];
    }
    console.log(invertir);
}
ocho();



function nueve() {
    n=10;
    let a = 0, b = 1; // primeros dos números
    let secuencia = [];

    for (let i = 0; i < n; i++) {
        secuencia.push(a);   // agregamos el número actual
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    console.log(secuencia);
}
nueve();

function diez(){
    let arraybueno=[]
    let array =[23,2,23,54,6,7,8,2,76];
    for (let i=0; i<arry.length;i++){
        if (array[i]> 10){
        arraybueno.push(array[i]);
        }
    }
    for (let i =0;i < arraybueno.length;i++) {
        console.log(arraybueno[i]);
    }
}
diez();




