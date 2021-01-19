const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('min  '));

let max = new Number(readlineSync.question('ymax  '));

let current = new Number(readlineSync.question('current '));

if (min > max) {
    console.log('Le min est plus grand que le max ');
}
else if ( (current > min) && (max > current) ) {
    console.log('bg ');
}
esle {
    console.log('pas bien ');
}