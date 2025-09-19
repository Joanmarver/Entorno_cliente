//ejer6

function Burbuja(A){
N = a.length;
let aux;
for (i = 0; i < N-2; i++) {
    for (j=0; j<N-2; j++){
        if(A[j]> A[j+1]){
            aux = A[j];
            A[j]=A[j+1];
            A[j+1]= aux;
        }
    }
}
}