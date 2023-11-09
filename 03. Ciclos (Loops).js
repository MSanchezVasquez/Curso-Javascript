//while
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
console.log("----");
//dowhile
let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 10);

//for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const moises = {
  name: "Moises",
  edad: 22,
  email: "moisesup.25@gmail.com",
};

for (const prop in moises) {
  console.log(prop); //name edad email
  console.log(moises[prop]);
}

const numeros = [10, 20, 30, 40];
for (const element of numeros) {
  console.log(element);
}

const cadena = "Hola Mundo";
for (const caracter of cadena) {
  console.log(caracter);
}
