let arregloAlicia = [195, 28, 30];
let arregloBob = [199,169,8];
let puntuacionA = 0;
let puntuacionB = 0;
let resultArray = [];
for (i = 0; i <= arregloAlicia.length; i++) {
    if(arregloAlicia[i]>arregloBob[i]){
        puntuacionA = puntuacionA + 1;
    }
    else if(arregloAlicia[i]<arregloBob[i]){
        puntuacionB = puntuacionB + 1;
    } 
}
resultArray.push(puntuacionA, puntuacionB);
console.log(resultArray); 




