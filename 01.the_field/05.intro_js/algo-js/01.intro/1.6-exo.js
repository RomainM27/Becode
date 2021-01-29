const readlineSync = require("readline-sync");

let numb1 = new Number(readlineSync.question('Number big one '));

let numb2 = new Number(readlineSync.question('Number small one'));

console.log(numb1 / numb2 - Math.floor(numb1 / numb2));