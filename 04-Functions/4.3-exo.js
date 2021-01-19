const readlineSync = require("readline-sync");

let randn = new Number(readlineSync.question('randn  '));

console.log("the array is "+ multiRand(randn));


/**
 * Create an array with tthe lenght of the para
 * @param  {Number} n the lenght
 * @return {Number}    the array
 * we create an array empty
 * 
 * for with the lenght of the n for each loop we 
 * push into the array the fonction rand10
 */
function multiRand(n) {
    var arrayn=[];
    for (i=0 ; i < n ; i++){
        arrayn.push(rand10());
    }
    return arrayn;
}

/**
 * Calcul trandom
 * @param  {Number} max The max you want
 * @param  {Number} min The min you want
 * @return {Number}      a number between the max en min
 * (max - min) + min
 */
function rand10() {
    return Math.floor(Math.random() * (10 - 0) + 0);
}
