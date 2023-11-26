/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  //Validaciones
  if (numero === undefined)
    return console.warn("No ingresaste el numero a convertir");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número`);
  if (base === undefined)
    return console.warn("No ingresastes la base a convertir");
  if (typeof base !== "number")
    console.error(`El valor "${base}" ingresado, NO es un número`);

  if (base === 2) {
    return console.log(
      `${numero} base ${base} = ${parseInt(numero, 10)} base 10`
    );
  } else if (base === 10) {
    return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
  } else {
    return console.error("El tipo de base no es valido");
  }
};
convertirBinarioDecimal(); //No ingresaste el numero a convertir
convertirBinarioDecimal("2"); //El valor "2" ingresado, NO es un número
convertirBinarioDecimal(100); //No ingresastes la base a convertir
convertirBinarioDecimal(100, "2"); //El valor "2" ingresado, NO es un número
convertirBinarioDecimal(114, 10); //114 base 10 = 1110010 base 2
convertirBinarioDecimal(4, 10); //4 base 10 = 100 base 2

console.log("---------------------------------");
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
const applyDiscount = (cantidad = undefined, discount = undefined) => {
  if (cantidad === undefined)
    return console.warn("No ingresaste el monto a descontar");
  if (typeof cantidad !== "number")
    return console.error(`El valor "${numero}" ingresado, debe ser un numero`);
  if (cantidad === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(cantidad) === -1)
    return console.error("El monto no puede ser negativo");
  if (discount === undefined)
    return console.warn("No ingresastes a cuanto quieres descontar");
  if (typeof discount !== "number")
    console.error(`El valor "${base}" ingresado, debe ser un numero`);

  let descuento = discount * 0.01;
  let montoFinal = cantidad - cantidad * descuento;
  return console.info(
    `- Monto Original: $${cantidad} \n- Descuento: $${
      cantidad * descuento
    } \n- Monto Final: $${montoFinal}\n---------------------`
  );
};
applyDiscount(500, 20);
applyDiscount(182, 20);
applyDiscount(712, 20);
applyDiscount(100, 10);
applyDiscount(500, 5);
applyDiscount(173, 7);

console.log("---------------------------------");
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresastes la fecha");
  if (!(fecha instanceof Date))
    return console.error(`El valor que ingresaste no es una fecha valida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};
calcularAnios(); //No ingresastes la fecha
calcularAnios({}); //El valor que ingresaste no es una fecha valida
calcularAnios(new Date()); //Estamos en el año actual 2023.
calcularAnios(new Date(2000, 11, 23)); //Han pasado 22 años, desde 2000.
calcularAnios(new Date(2050, 4, 10)); //Faltan 27 años para el 2050.
