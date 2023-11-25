/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
const numeroRandom = () => {
  console.info(Math.round(Math.random() * 100 + 500));
};
numeroRandom();

console.log("---------------------------------------");
/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
const esCapicua = (num) => {
  if (!num) return console.warn("No ingresaste un numero");
  if (typeof num !== "number")
    return console.error(`El valor ${num} ingresado, NO es un número`);
  num = num.toString();
  let reverse = num.split("").reverse().join("");
  return num === reverse
    ? console.info(
        `Si es Capicúa, numero original: ${num}, numero al reves: ${reverse}`
      )
    : console.info(
        `No es Capicúa, numero original: ${num}, numero al reves: ${reverse}`
      );
};

esCapicua(481); //No es Capicúa, numero original: 481, numero al reves: 184
esCapicua(101); //Si es Capicúa, numero original: 101, numero al reves: 101
esCapicua(); //No ingresaste un numero
esCapicua(1000); //No es Capicúa, numero original: 1000, numero al reves: 0001
esCapicua({}); //El valor [object Object] ingresado, NO es un número
esCapicua(18.81); //Si es Capicúa, numero original: 18.81, numero al reves: 18.81

console.log("---------------------------------------");
/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */
const factorial = (numero) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    console.error(`El valor ingresado no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.warn("El numero no puede ser negativo");

  let contador = 1;
  for (let i = 1; i <= numero; i++) {
    contador = contador * i;
  }
  return console.info(`El factorial de ${numero} es ${contador}`);
};
factorial(0); //El numero no puede ser 0
factorial(-5); //El numero no puede ser negativo
factorial(5); //El factorial de 5 es 120
