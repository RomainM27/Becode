const readlineSync = require("readline-sync");

let city = readlineSync.question("Ville ?  ");
let name = readlineSync.question('name ?  ');
let fristname = readlineSync.question('fristname ?  ');

console.log('your name is '+name + ' '+ fristname + ' and you live in '+city)