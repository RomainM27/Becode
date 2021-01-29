const readlineSync = require("readline-sync");

let numb1 = readlineSync.question('choose a day ');

switch (numb1) {
    case "1":
        console.log('Monday');
        break;
    case "2":
        
        break;
    case "3":
        console.log('Wednesday');
        break;
    case "4":
        console.log('Thursday');
        break;
    case "5":
        console.log('Friday');
        break;
    case "6":
        console.log('Saturday');
        break;
    case "7":
        console.log('Sunday');
        break;

    default:
        console.log('the day of the week is only 7')
        break;
}