/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
const esPrimo = (num) => {
  if (num === undefined) return console.warn("No ingresaste un numero");
  if (typeof num !== "number")
    return console.error(`El valor ${num} ingresado, NO es un número`);
  if (num === 0) return console.error("El numero no puede ser 0");
  if (num === 0) return console.error("El numero no puede ser 1");
  if (Math.sign(num) === -1)
    return console.error("El numero no puede ser negativo");
  let divisible = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log("El numero no es primo")
    : console.log("El numero si es primo");
};
esPrimo(89); //El numero si es primo
esPrimo(); //No ingresaste un numero
esPrimo(13); //El numero si es primo
esPrimo(200); //El numero no es primo
esPrimo(10); //El numero no es primo
esPrimo(5); //El numero si es primo

console.log("----------------------------");
/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
const esParOImpar = (numero) => {
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, NO es un número`);
  if (numero === undefined) return console.warn("No ingresaste un numero");
  return numero % 2 == 0
    ? console.log("El numero es par")
    : console.log("El numero es impar");
};
esParOImpar(2);
esParOImpar(3);
esParOImpar(2);
esParOImpar(-1);
esParOImpar(-3);

console.log("----------------------------");
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
const convertidorDeGrados = (grados, unidad) => {
  if (grados === undefined)
    return console.warn("No ingresastes grados a convertir");
  if (typeof grados !== "number")
    return console.error(`El valor "${grados}" ingresado NO es un numero`);
  if (unidad === undefined)
    return console.warn("No ingresaste el tipo de grado a convertir");
  if (typeof unidad !== "string")
    return console.error(
      `El valor "${unidad}" ingresado NO es una cadena de texto`
    );
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");

  switch (unidad) {
    case "F":
      let gradosF = grados * (9 / 5) + 32;
      return console.log(`${grados}°C es ${gradosF}°F`);
    case "C":
      let gradosC = (grados - 32) * (5 / 9);
      return console.log(`${grados}°F es ${gradosC}°C`);
  }
};
convertidorDeGrados(); //No ingresastes grados a convertir
convertidorDeGrados("2"); //El valor "2" ingresado NO es un numero
convertidorDeGrados(2); //No ingresaste el tipo de grado a convertir
convertidorDeGrados(100, "F"); //100°C es 212°F
convertidorDeGrados(100, "C"); //100°F es 37.77777777777778°C
convertidorDeGrados(100, "HOLA"); //Valor de unidad no reconocido
