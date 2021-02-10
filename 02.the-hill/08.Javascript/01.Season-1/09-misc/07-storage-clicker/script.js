// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    let target = document.getElementById("target");
    let increment = document.getElementById("increment");
    if(localStorage.clickcount){
        target.innerHTML = parseInt(localStorage.clickcount);
    }
    increment.addEventListener("click", () =>{
        let number = parseInt(target.innerHTML);
        number += 1;
        target.innerHTML = number;
        if(localStorage.clickcount){
            localStorage.clickcount = parseInt(localStorage.clickcount) + 1;
        }else{
            localStorage.clickcount = 1;
        }
    })
})();
