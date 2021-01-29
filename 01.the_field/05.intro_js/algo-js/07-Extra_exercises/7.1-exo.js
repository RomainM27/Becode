const readlineSync = require("readline-sync");

let numbertoGuest = Math.floor(Math.random() * 100 ) + 1
console.log(numbertoGuest);
let userInput = "";
do {
    userInput = readlineSync.question('The name of the series : ')
    if (userInput > numbertoGuest) {
        console.log("trop grand");
    }
    else if(userInput < numbertoGuest){
        console.log("trop petit");
    }

}while (userInput != numbertoGuest)

console.log("gagne");