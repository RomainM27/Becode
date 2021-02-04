// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here

    let passString = '' ;
    let pass = document.getElementById("pass-one")
    pass.addEventListener("keyup", () => {
        passString  = pass.value.length;
        if (passString > 10) {
            pass.value = pass.value.slice(0,10);
        }else {
            document.getElementById("counter").innerHTML = passString + "/10";
        }   

    })
})();
