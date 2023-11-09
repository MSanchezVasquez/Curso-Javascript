const moises = {
  name: "Moises",
  edad: 22,
  pasatiempos: ["Correr", "Programar", "Jugar Play"],
  soltero: true,
  contacto: {
    email: "moisesup.25@gmail.com",
    movil: 976707221,
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.name} y tengo ${this.edad} años y me puedes llamar al numero ${this.contacto.movil}`
    );
  },
};

console.log(moises.contacto); //{ email: 'moisesup.25@gmail.com', movil: 976707221 }

console.log(moises.pasatiempos[0]); //Correr
console.log(moises.soltero); //true

console.log(moises.contacto.movil); //976707221

moises.decirMiNombre(); //Hola me llamo Moises y tengo 22 años y me puedes llamar al numero 976707221

console.log(Object.keys(moises)); /*[
  'name',
  'edad',
  'pasatiempos',
  'soltero',
  'contacto',
  'saludar',
  'decirMiNombre'
] */

console.log(Object.values(moises)); /*[
  'Moises',
  22,
  [ 'Correr', 'Programar', 'Jugar Play' ],
  true,
  { email: 'moisesup.25@gmail.com', movil: 976707221 },
  [Function: saludar],
  [Function: decirMiNombre]
]
*/

console.log(moises.hasOwnProperty("name")); //true
console.log(moises.hasOwnProperty("nacimiento")); //false
