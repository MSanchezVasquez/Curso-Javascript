console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "Kenai"); //Hola Kenai desde el undefined

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Moises"); //Hola Moises desde el Contexto Objeto
saludar.call(null, "Hola", "Moises"); //Hola Moises desde el undefined
saludar.apply(obj, ["Adios", "Moises"]); //Adios Moises desde el Contexto Objeto
saludar.apply(null, ["Adios", "Moises"]); //Adios Moises desde el undefined
saludar.apply(this, ["Adios", "Moises"]); //Adios Moises desde el Contexto Global

const persona = {
  nombre: "Moises",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar(); //Hola Moises

const otraPersona = {
  saludar: persona.saludar.bind(persona),
};

otraPersona.saludar(); //Hola Moises
