const readlineSync = require("readline-sync");

let lenght = new Number(readlineSync.question('lenght  '));
let width = new Number(readlineSync.question('width  '));


/**
 * Calcul the Surface of a rectangle
 * @param  {Number} lenght The lenght
 * @param  {Number} width The width
 * @return {Number}      the Surface
 */
let calcSurface = (L , W) => {
    return L*W;
}

console.log("The suface is "+ calcSurface(lenght,width));


