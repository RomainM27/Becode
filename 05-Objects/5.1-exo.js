const readlineSync = require("readline-sync");


console.log(askTvSerie());

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

