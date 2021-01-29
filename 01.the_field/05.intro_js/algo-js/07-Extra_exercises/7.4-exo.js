const readlineSync = require("readline-sync");
let actionInput;
let arrayOfPizza = ["Salami","Jambon","Fromage"]
do{
    showMenu();
    actionInput = readlineSync.question('');
    inputChoose(actionInput,arrayOfPizza);
}while(actionInput != 4)


// Affiche juste le menu
function showMenu(){
console.log("Hello! Welcome to the Pizza Flavors Manager. \n");
console.log("Please choose your actions:\n");
console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program\n");
console.log("Enter your action's number:");
}

function inputChoose(num,arrayOfPizza) {
    switch (num) {
        case "1":
            showPizza(arrayOfPizza);
            break;
        case "2":
            addPizza(arrayOfPizza);
            break;
        case "3":
            removePizza(arrayOfPizza);
            break;
        case "4":
            console.log("\n\n Passez une bonne journee !\n\n");
            break;
        default:
            console.log("\n\n=====> Votre choix n'est pas valide <=====\n\n");
            break;
    }
};

function addPizza(arrayOfPizza) {
    arrayOfPizza.push(readlineSync.question('\n Entrez le gout de la pizza: '));
};

function showPizza(arrayOfPizza) {
    console.log("\n--------------------------------------")
    for (i=0; i<arrayOfPizza.length ;i++) {
        console.log((i+1)+ " - The Pizza flavor is : "+arrayOfPizza[i]);
    }
    console.log("--------------------------------------\n")
};

function removePizza(arrayOfPizza) {
    showPizza(arrayOfPizza);

    let thePizzaToRemove;
    arrayOfPizza.splice(readlineSync.question('\n"Entrez le nombre de la pizza a supprimer : ')-1,1);
}