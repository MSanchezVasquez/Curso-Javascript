/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
function numeroDeCaracteres(cadena1) {
  if (typeof cadena1 === "string") {
    return cadena.length;
  } else if (typeof cadena1 === "number") {
    cadena1 = cadena1.toString();
    return cadena1.length;
  } else if (typeof cadena1 === "object") {
    numCarac = Object.entries(cadena1);
    return numCarac.length;
  } else if (typeof cadena1 === Array) {
    return cadena1.length;
  }
}
console.log(numeroDeCaracteres({ nombre: "mOISES" }));

console.log("----------");
/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
function textoRecortado(cadena2, indice) {
  let texto = cadena2.slice(0, indice);
  return `${cadena2}\n${texto}`;
}
console.log(textoRecortado("Hola MUNDO", 4));
console.log(textoRecortado("El mejor amigo", 8));

console.log("------------------------");
/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal']. */
const cadenaAArreglo = (cadena3 = "", separador = undefined) => {
  !cadena3
    ? console.warn("No ingresaste una cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena3.split(separador));
};
cadenaAArreglo("Hola");

console.log("------------------------------------");
/*4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
/*const repiteTexto = (texto = "", repetidor = undefined) => {
  if (!texto) {
    return console.warn("No ingresastes un texto");
  } else if (repetidor === undefined) {
    return console.warn("No ingresaste por cuanto quieres repetir");
  }
  let array = texto.split(";");
  for (let i = 1; i < repetidor; i++) {
    array.push(texto);
  }
  let cadena4 = array.toString();
  return cadena4;
};
console.log(repiteTexto("Hola Mundo", 5)); //Hola Mundo,Hola Mundo*/
const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");
  if (veces === undefined)
    return console.warn("No ingresaste el numero a repetir el texto");
  if (veces === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(veces) === -1)
    console.error("El numero de veces no puede ser negativo");
  for (let i = 1; i <= veces; i++) console.info(`${texto}`);
};
repetirTexto("Moises Sanchez", 4); /*Moises Sanchez
                                     Moises Sanchez
                                     Moises Sanchez
                                     Moises Sanchez*/
