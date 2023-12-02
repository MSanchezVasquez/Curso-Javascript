/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
// const elevarAlCuadrado = (arr) => {
//   if ((arr = undefined))
//     return console.warn("No ingresaste el arreglo de numeros");
//   if (!(arr instanceof Array))
//    return console.error("El valor que ingresaste no es un arreglo");
//   if (arr.length == 0) return console.error("El arreglo esta vacio");
//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.error(`El valor ${num} no es un numero`);
//   }
//   const newArr = arr.map((el) => el * el);
//   return console.info(
//     `Arreglo original: ${arr} \nArreglo elevado al cuadrado: ${newArr}`
//   );
// };
// elevarAlCuadrado([1, 2, 3]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
// const devolverMayorYMenor = (array = undefined) => {
//   if ((array = undefined))
//     return console.warn("No ingresaste el arreglo de numeros");
//   if (!(array instanceof Array))
//     return console.error("El valor que ingresaste no es un arreglo");
//   if (array.length == 0) return console.error("El arreglo esta vacio");
//   for (let num of array) {
//     if (typeof num !== "number")
//       return console.error(`El valor ${num} no es un numero`);
//   }
//   return console.info(
//     `Arreglo original: ${array}\nValor mayor:${Math.max(
//       ...array
//     )}, \nValor menor: ${Math.min(...array)}`
//   );
// };

// devolverMayorYMenor([]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */
const separarParesImpares = (arr = undefined) => {
  if ((arr = undefined))
    return console.warn("No ingresaste el arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length == 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} no es un numero`);
  }
  return console.log({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares([5, 2, 5, 8, 3, 111, 2, 4]);
