const readlineSync = require("readline-sync");


while (true) {
    let numb = new Number(readlineSync.question('Votre nombre ? '));
    if (numb == 42) {
        return false
    }
    console.log('are you sure ??')
}