//Funcion Constructora
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
  //Metodos
  this.sonar = () => {
    console.log("Hago sonidos porque estoy vivo");
  };
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
}

const snoopy = new Animal("Snoopy", "Macho");
console.log(snoopy); /*Animal {
                        nombre: 'Snoopy',
                        genero: 'Macho',
                        sonar: [Function (anonymous)]
                        saludar: [Function (anonymous)]
                       }*/
snoopy.sonar(); //Hago sonidos porque estoy vivo
snoopy.saludar(); //Hola me llamo Snoopy

const lolaBunny = new Animal("Lola", "Hembra");
console.log(lolaBunny); /*Animal {
                            nombre: 'Lola',
                            genero: 'Hembra',
                            sonar: [Function (anonymous)]
                            saludar: [Function (anonymous)]
                          }*/

//Funcion constructora donde asignamos los metodos al Prototipo, no a la funcion como tal.
function Persona(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

//Metodos
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

let persona1 = new Persona("Moises", "Varon");
console.log(persona1); //Persona { nombre: 'Moises', genero: 'Varon' }
persona1.saludar(); //Hola me llamo Moises
