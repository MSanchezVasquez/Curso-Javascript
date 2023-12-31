console.log(this);
this.nombre = "Contexto Global";
console.log(this); //{ nombre: 'Contexto Global' }
console.log(this.nombre); //Contexto Global

function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir(); //Contexto Objeto

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  this.nombre = nombre;
  //return console.log(this.nombre);
  return () => {
    console.log(this.nombre);
  };
}

let jon = new Persona("Moises");
jon();
