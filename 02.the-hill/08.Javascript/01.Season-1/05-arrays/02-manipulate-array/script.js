// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    let btn = document.getElementById("run");
    btn.addEventListener("click", () => ArrayMove(fruits));
    
    /* btn.addEventListener("click", () =>{
    fruits.pop(),

    fruits.shift(),

    fruits.push('kiwi'),

    fruits.unshift('banana'),
    
    console.log(fruits)}) ; */


})();


function ArrayMove(fruits) {
    fruits.pop();

    fruits.shift();

    fruits.push('kiwi');

    fruits.unshift('banana');
    
    console.log(fruits);

}