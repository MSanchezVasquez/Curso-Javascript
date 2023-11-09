const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Moises");

const sumar = (a, b) => a + b;

console.log(sumar(5, 2));
console.log(sumar(5, 8));

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, index) =>
  console.log(`${numero} esta en la posicion: ${index}`)
);
