// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let passOne = document.getElementById("pass-one");
    let passTwo = document.getElementById("pass-two");
    document.getElementById("run").addEventListener("click", () =>{
        if (passOne.value !== passTwo.value) {
            passTwo.style.borderColor = 'red';
            passOne.style.borderColor = 'red';
        }
        else {
            passTwo.style.borderColor = 'silver';
            passOne.style.borderColor = 'silver';
        }
        
    })
})();
