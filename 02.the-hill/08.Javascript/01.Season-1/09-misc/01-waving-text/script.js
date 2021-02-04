// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let target = document.getElementById("target");
    let targetString = target.textContent;
    console.log(targetString);
    console.log(targetString.length);
    console.log(targetString[5]);
    let i=0;
    
    for (let i = 0; i < targetString.length; i++) {
        console.log(targetString[i])
        targetString[i].fontsize(7) ;
        
    }
    

        
 
})();
