// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let target = document.getElementById("target");
    let targetText = target.innerHTML;
    target.innerHTML = '';
    console.log(targetText)
    let id = setInterval(() => {
        for (let i = 0; i < targetText.length; i++) {
            console.log(targetText[i])
            if (i === 50){
                clearInterval(id)
            }
        }
    }, 1000);
})();
