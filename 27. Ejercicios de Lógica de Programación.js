/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );
  let vocales = 0,
    consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  for (letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.log({ cadena, vocales, consonantes });
};
contarLetras("Hola Mundo"); //{ cadena: 'hola mundo', vocales: 4, consonantes: 5 }
contarLetras("La mejor opcion"); //{ cadena: 'la mejor opcion', vocales: 6, consonantes: 7 }
contarLetras(2); //El valor "2" ingresado, NO es una cadena de texto

console.log("------------------------------------------");
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
  return expReg
    ? console.log(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre valido`);
};
validarNombre(); //No ingresaste un nombre
validarNombre(3); //El valor "3" ingresado, NO es una cadena de texto
validarNombre("Moises Sanchez"); //"Moises Sanchez", es un nombre valido
validarNombre("MOises-14"); //"MOises-14", NO es un nombre valido

console.log("-----------------------------------");
/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, NO es una cadena de texto`
    );
  let expReg1 =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );
  return expReg1
    ? console.log(`"${email}", es un email valido`)
    : console.warn(`"${email}", NO es un email valido`);
};
validarEmail(); //No ingresaste un email
validarEmail(24); //El valor "24" ingresado, NO es una cadena de texto
validarEmail("moisesup.25@gmail.com"); //"moisesup.25@gmail.com", es un email valido
validarEmail("mo,ise,sup@gmail"); //"mo,ise,sup@gmail", NO es un email valido
