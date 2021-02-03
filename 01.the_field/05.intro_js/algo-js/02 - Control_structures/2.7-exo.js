const readlineSync = require("readline-sync");

let numb1 = readlineSync.question('choose a number(not too hight) n : ');
let total = 0;

for (i=0; i<numb1; i++) {
    let a = new Number(readlineSync.question('choose a number to add '));
    total += a;
}

console.log(total);
