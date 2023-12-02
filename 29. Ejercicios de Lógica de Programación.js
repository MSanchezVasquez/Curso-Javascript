/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
// function ordenarArreglo(arr) {
//   if ((arr = undefined))
//     return console.warn("No ingresaste un arreglo de numeros");
//   if (!(arr instanceof Array))
//     return console.error("El valor que ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("El arreglo esta vacio");
//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.error(`El valor ${num} no es un numero`);
//   }
//   return console.info({
//     arr,
//     asc: arr.map((el) => el).sort(),
//     desc: arr
//       .map((el) => el)
//       .sort()
//       .reverse(),
//   });
// }
// ordenarArreglo([5, 8, 9, 6, 2]);

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
// const quitarDuplicados = (array) => {
//   return console.info({
//     original: array,
//     sinDuplicados: array.filter(
//       (value, index, self) => self.indexOf(value) === index
//     ),
//   });
// };
// quitarDuplicados(2, 2, 4, 7, 8, 5, 4);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
function promedio(arr1) {
  if ((arr1 = undefined))
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr1 instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr1.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr1) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} no es un numero`);
  }
  return console.info(
    arr1.reduce((total, num, index, arr1) => {
      total = total + num;
      if (index === arr1.length - 1) {
        return `El promedio de ${arr1.join("+")} es igual a ${
          total / arr1.length
        }`;
      } else {
        return total;
      }
    })
  );
}
promedio([5, 8, 9, 6, 2]);
