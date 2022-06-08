// numeros del 1 al 100 en consola

// for (let i = 1; i < 101; i++) {
        
//     console.log(i)
// }

// numeros del 1000 al 500 de 2 en dos mostrados en consola

// for (let i = 1000; i > 499; i = i -2) {
//     console.log(i)
    
// }

// promedio de notas en consola

function promedio(notas) {

    let i = 0,
    suma = 0,

    totalNotas = notas.length;
    
    while (i < totalNotas) {
        
        suma = suma + notas[i++];
    }
    return suma / totalNotas;
}

var notas = [ 6,8,9,2,5,10];
var a = promedio(notas);
console.log(a);




