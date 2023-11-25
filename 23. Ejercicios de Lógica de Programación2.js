/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
const invertirPalabras = (cadena1 = "") => {
  let array1 = cadena1.split("").reverse().join("");
  return console.log(array1);
};
invertirPalabras("Moises"); //sesioM
invertirPalabras("Hola Mundo"); //odnuM aloH

console.log("---------------------------------");
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
const contarNumVeces = (cadena2, palabra) => {
  if (!cadena2) return console.warn("No has ingresado el texto");
  if (palabra == undefined)
    return console.warn("No has ingresado la palabra que quieres contar");
  let array2 = cadena2.split(" ");
  let contador = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] == palabra) contador++;
  }
  return console.info(`La palabra ${palabra} se repite ${contador} veces`);
};
contarNumVeces("hola mundo adios mundo", "mundo");

console.log("-------------------------------");
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
const esUnPalindromo = (cadena3 = "") => {
  if (!cadena3) return console.warn("No has ingresado la frase");
  if (typeof cadena3 !== "string")
    console.warn("Tienes que ingresar una cadena de texto");
  cadena3 = cadena3.toLowerCase();
  let revertido = cadena3.split("").reverse().join("");
  if (revertido == cadena3) return console.log(`La cadena es un palíndromo`);
};
esUnPalindromo("Salas");

console.log("-------------------------------");
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
const eliminarCaracteres = (texto = "", patron = "") => {
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));
};
eliminarCaracteres(); //No ingresaste un texto
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5"); //No ingresaste un patron de caracteres
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); //1, 2, 3, 4 y 5
