// 09-misc/01-waving-text/script.js - 9.1: waving text
const target = document.getElementById("target");
const targetString = target.textContent;

(() => {

    // your code here

    target.innerHTML = '';
    target.style.textAlign = "left";
    console.log(targetString);
    let sens = "down"
    i=0;

    targetInner = ""
    let fontSi = 26;

    let wave = setInterval( () => {
        if (i == (targetString.length -1)){
            clearInterval(wave);
        }
        switch (fontSi) {
            case 30: fontSi=26; sens = "down"; break;
            case 10: fontSi=14; sens = "up"; break;
            default: if(sens=="down"){fontSi -= 4;}else{fontSi +=4;}; break;
        }

        targetInner += spanString(targetString[i], fontSi);
        target.innerHTML=targetInner;
        i++;
        },100)
    
})();

function spanString(letter, taille){
    return `<span style="font-size:${taille}px">${letter}</span>`
}


