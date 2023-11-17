console.log(Date);

let fecha = new Date();

console.log(fecha); //2023-11-17T22:44:27.656Z
console.log(fecha.getDate()); //17
console.log(fecha.getDay()); //5
console.log(fecha.getMonth()); //10
console.log(fecha.getFullYear()); //2023
console.log(fecha.getHours()); //17
console.log(fecha.getMinutes()); //47
console.log(fecha.getSeconds()); //26
console.log(fecha.getMilliseconds()); //628
console.log(fecha.toString()); //Fri Nov 17 2023 17:48:50 GMT-0500 (hora estándar de Perú)
console.log(fecha.toDateString()); //Fri Nov 17 2023
console.log(fecha.toLocaleString()); //17/11/2023, 17:49:35
console.log(fecha.toLocaleDateString()); //17/11/2023
console.log(fecha.toLocaleTimeString()); //17:51:01
console.log(fecha.getTimezoneOffset()); //300
console.log(fecha.getUTCDate()); //17
console.log(fecha.getUTCHours()); //22

let cumpleMoises = new Date(2000, 11, 23);
console.log(cumpleMoises); //2000-12-23T05:00:00.000Z
