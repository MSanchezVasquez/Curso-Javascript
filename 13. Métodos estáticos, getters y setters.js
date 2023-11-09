class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = null;
  }
  //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log("Soy un ser humano y vivo en la Tierra");
  }
  //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getGenero() {
    return this.genero;
  }
  set setGenero(genero) {
    this.genero = genero;
  }
}

Persona.queEres(); //Soy un ser humano y vivo en la Tierra
let mario = new Persona("Mario", 22);
console.log(mario.getGenero); //null
mario.setGenero = "Masculino";
console.log(mario.getGenero); //Masculino
