const readlineSync = require("readline-sync");

let numb1 = new Number(readlineSync.question('your age '));

if (numb1 > 17) {
    console.log('your are an adult');
}
else {
    console.log('your are not yet an adult');
}