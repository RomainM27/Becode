
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    Array.from(document.querySelectorAll('button')).forEach(button => 
        button.addEventListener("click",
         () => document.querySelector("body").style.backgroundColor = button.id));
    

})();
