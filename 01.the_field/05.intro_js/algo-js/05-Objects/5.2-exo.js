const readlineSync = require("readline-sync");

let series = askTvSerie();
console.log(series);

console.log(randomizeCast(series.casters));

function askTvSerie() {
    let series = new Object();

    series.name = readlineSync.question('The name of the series : ');
    series.age = readlineSync.question('The years of the series : ');
    series.casters= new Array();
    let caster = readlineSync.question('The caster (enter / to quit): ');
    do {
        series.casters.push(caster);
        caster = readlineSync.question('The caster (enter / to quit): ');
    }while (caster != "/");
    return series;
}


/**
 * Create an array with tthe lenght of the para
 * @param  {Array} tvSerie   An array of casters
 * @return {Array}   The array of casters shuffle
 * i = length of the tvSerie
 */
function randomizeCast(tvSerie){

    // return tvSerie.sort(() => Math.random() - 0.5);
    // Passe pas avec des mots entiers :'(

    let i = tvSerie.length;
    let temp; // Variable temporaire
    let index; 
        
    // While i > 0 we have element in our array
    while (i > 0) {
        // Pick a random value of i --- 0,1,2,..., i-1
        index = Math.floor(Math.random() * i);
        /** 
         * Decrease i by 1 
         * to reduct the array and dont take the last one 
         * tvSerie[5] if i=5 doesnt exist
         *  So we need to decrease i 
        */  
         
        i--;
        /**
         * And swap the last element with the index choosen
         * ex :
         * array of the exemple ['1','2','3','4','5']
         * 
         *  if i= 5 and descrese               --> now 4
         * index was random between 0 and 4     --> here 3
         * 
         * temp = tvSerie[4]                    --> temps = 5
         * tvSerie[4] = tvSerie[3]              --> so '5' is replace by '4'    ['1','2','3','4','4']
         *  tvSerie[index] = temp;              --> '4' replace by '5'          ['1','2','3','5','4']
         * 
         *  For the next time as the i descrese 
         *  we dont count the last item of the array: tvSerie[4]= "4" 
         * 
         *  Cuz the next i gonna be max 3 and here tvSerie[3]= "5" 
        */ 
        
        temp = tvSerie[i];
        tvSerie[i] = tvSerie[index];
        tvSerie[index] = temp;
    }
    return tvSerie;
}