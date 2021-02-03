// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array
const ArrayRandom = multiRand(10);
        console.log(ArrayRandom);

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        
        Array.from(document.querySelectorAll(".material td ")).forEach(replaceInTd);
        document.getElementById('min').innerHTML = min(ArrayRandom);
        document.getElementById('max').innerHTML = max(ArrayRandom);
        document.getElementById('sum').innerHTML = sum(ArrayRandom) ;
        document.getElementById('average').innerHTML = average(ArrayRandom);
    }
    /* 
            Array.from(document.querySelectorAll(".material td ")).forEach((td => {
            td.innerHTML = ArrayRandom[1]
        }),index);
    }*/
    )
})();



function replaceInTd(item, index) {
    item.innerHTML = ArrayRandom[index];
}





function max(arr){
    return Math.max(...arr);
}

function min(arr){
    return Math.min(...arr);
}

// Need to understande this 
function average(arr){
    return arr.reduce(function(a,b) {
        return a+b
    }, 0) / arr.length;
}

function sum(arr){
    return arr.reduce(function(a,b) {
        return a+b
    }, 0);
}
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
        arrayn.push(rand100());
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
function rand100() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}
