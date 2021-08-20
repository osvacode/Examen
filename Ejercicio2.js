var text = "El alumno no entra, en la escuela, el alumno es flojo, alumo, flojo, texto de pruebas, pruebas, el";
array = text.split(/[\s\.,]+/g),
resultado = foo(array);
function foo (array) {
    let a = [],
      b = [],
      arr = [...array], // clone array so we don't change the original when using .sort()
      prev;
  
    arr.sort();
    for (let element of arr) {
      if (element !== prev) {
        a.push(element);
        b.push(1);
      }
      else ++b[b.length - 1];
      prev = element;
    }
  
    return [a, b];
  }
for(var palabra in resultado){
console.log("La palabra '" + palabra + "' se repite " + resultado[palabra] + " vez/veces");
}