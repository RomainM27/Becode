const readlineSync = require("readline-sync");

let lenght = new Number(readlineSync.question('lenght  '));
let width = new Number(readlineSync.question('width  '));

let calcSurface = (L , W) => {
    return (L+W)*2;
}

console.log("The suface is "+ calcSurface(lenght,width));


