// 09-misc/01-waving-text/script.js - 9.1: waving text
const target = document.getElementById("target");
const targetString = target.textContent;

(() => {

    // your code here

    target.innerHTML = '';
    console.log(targetString);
    console.log(targetString.length);

    //createSpan() // create span
    //waving()
    let span;
    let spantext = "";
    for (let i = 0; i < targetString.length; i++) {
        //targetString.length\
        (function(i){
            setTimeout( () => {
            span = document.createElement("span");
            spantext = document.createTextNode(targetString[i]);
            span.appendChild(spantext);
            console.log(span)
            target.appendChild(span);
            },8000)
        })(i);
    }
 
    
})();

/*
function createSpan() {
    let span;
    let spantext = "";
    for (let i = 0; i < targetString.length; i++) {
        span = document.createElement("span");
        spantext = document.createTextNode(targetString[i]);
        span.appendChild(spantext);
        target.appendChild(span);
    }
}

function waving() {
    let span;
    let spantext = "";
    for (let i = 0; i < targetString.length; i++) {
        //targetString.length\
        setTimeout( () => {
        span = document.createElement("span");
        spantext = document.createTextNode(targetString[i]);
        span.appendChild(spantext);
        console.log(span)
        target.appendChild(span);
        },8000)
    }
 
}
*/