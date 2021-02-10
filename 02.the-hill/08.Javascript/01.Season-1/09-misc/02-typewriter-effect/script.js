// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

const target = document.getElementById("target");
const targetText = target.innerHTML;
(() => {
    // recursive function, i dont use that i the other exercice, think its the best
    function typeWriter() {
        let timer = alea()
        if (cpt < targetText.length){
            target.innerHTML += targetText.charAt(cpt);
            cpt++;
            setTimeout(typeWriter, timer);
        }
    }
    
    // your code here

    target.innerHTML = '';
    let  cpt=0;
    console.log(targetText)
    typeWriter()
})();

function alea(){
    return Math.floor(Math.random() * (2000 - 100)) + 100;
}


