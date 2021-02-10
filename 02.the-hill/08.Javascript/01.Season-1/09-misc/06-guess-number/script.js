// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    guessNumber(alea())

})();


function alea(){
    return Math.floor(Math.random() * (101 - 1)) + 1;
}

function guessNumber(alea) {
    alert(alea)
    let inputUser = 0;
    let cpt = 0;
    do{
        inputUser = prompt("entrez un nombre pour deviner")
        cpt++;
        if(inputUser < alea){
            alert("dommage c est plus grand")
        }else if(inputUser > alea){
            alert("Dommage c est plus petit")
        }

    }while(inputUser != alea);
    alert(`Vous avez gagne en ${cpt} fois`)
}