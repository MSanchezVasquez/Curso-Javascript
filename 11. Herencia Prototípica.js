function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
  this.ladrar = function () {
    console.log("Woof woof");
  };
}

//Herencia Prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano");
console.log(snoopy); /* Perro {
                          super: [Function: Animal],
                          nombre: 'Snoopy',
                          genero: 'Macho',
                          ladrar: [Function (anonymous)],
                          tamanio: 'Mediano'
                        }*/
snoopy.ladrar(); //Woof woof
