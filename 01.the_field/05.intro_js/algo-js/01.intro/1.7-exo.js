const readlineSync = require("readline-sync");

let numb1 = new Number(readlineSync.question('shoes size '));

let numb2 = new Number(readlineSync.question('HB '));

console.log(numb1 *2);

console.log((numb1*2)+5);

console.log(((numb1*2)+5)* 50);

console.log((((numb1*2)+5)* 50 )-numb2);

console.log(((((numb1*2)+5)* 50 )-numb2)+1766);

