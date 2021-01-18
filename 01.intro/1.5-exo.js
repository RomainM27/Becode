const readlineSync = require("readline-sync");

let numb1 = new Number(readlineSync.question('Number with deci'));

let numb2 = new Number(readlineSync.question('Number with deci'));

console.log(Math.trunc(numb1)* numb2);-