const a = [];
const b = [1, true, "Hola", ["A", "B"]];
console.log(a);
console.log(b);
console.log(b[2]); //Hola
console.log(b[3]); //[ 'A', 'B' ]
console.log(b[3][1]); //B

const c = Array.of("X", "Y", "Z");
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde"];
console.log(colores);
colores.push("Gris");
console.log(colores); //[ 'Rojo', 'Verde', 'Gris' ]
colores.pop();
console.log(colores); //[ 'Rojo', 'Verde' ]

colores.forEach((color, index) => {
  console.log(index, color);
});
