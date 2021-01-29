const readlineSync = require("readline-sync");


let phrase = "Coding is fun!";

let isItTrue = true;
let isItFalse = false;
let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);

let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);

let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);

let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));

let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");