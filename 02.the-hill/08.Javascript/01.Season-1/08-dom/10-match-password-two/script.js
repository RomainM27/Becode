// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here

    let passOne = document.getElementById("pass-one");
    let passTwo = document.getElementById("pass-two");
    document.getElementById("run").addEventListener("click", () =>{
        if (passOne.value !== passTwo.value) {
            passTwo.classList.add('error');
            passOne.classList.add('error');
        }
        else {
            passTwo.classList.remove('error');
            passOne.classList.remove('error');
        }
        
    })
})();
