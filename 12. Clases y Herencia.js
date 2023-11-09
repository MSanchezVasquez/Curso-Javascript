class Animal {
  constructor(nombre, genero, tipo, sonido) {
    this.nombre = nombre;
    this.genero = genero;
    this.tipo = tipo;
    this.sonido = sonido;
  }
  //Metodos
  info() {
    console.log(`Soy un/una ${this.tipo} de genero ${this.genero}`);
  }
  hacerSonido() {
    console.log(`Mi sonido es ${this.sonido}`);
  }
}

let mimi = new Animal("Mimi", "Hembra", "Perro", "Woof woof");
let scoob = new Animal("Scoob", "Hembra", "Vaca", "Muu Muu");

console.log(mimi); /*Animal {
                      nombre: 'Mimi',
                      genero: 'Hembra',
                      tipo: 'Perro',
                      sonido: 'Woof woof'
                     }*/
mimi.hacerSonido(); //Mi sonido es Woof woof
scoob.info(); //Soy un/una Vaca de genero Macho

class Perro extends Animal {
  constructor(nombre, genero, tipo, tamanio) {
    //Con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero, tipo);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Woof Woof");
  }
}
let hachik = new Perro("Hachik", "Macho", "Perro", "Mediano");
console.log(hachik); /*Perro {
                        nombre: 'Hachik',
                        genero: 'Macho',
                        tipo: 'Perro',
                        sonido: undefined,
                        tamanio: 'Mediano'
                       }*/
hachik.ladrar(); //Woof Woof
hachik.info(); //Soy un/una Perro de genero Macho
