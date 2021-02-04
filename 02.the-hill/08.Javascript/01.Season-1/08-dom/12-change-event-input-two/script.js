// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
<<<<<<< HEAD
    let pass = document.getElementById("pass-one");
    let valid = document.getElementById("validity");
    validity
    pass.addEventListener("keyup", () => { 
        let regexTest = /^(?=(.*\d){2,})(?=([a-zA-Z])*).{8,}$/;
        regexTest.test(pass.value) ? valid.innerText = 'OK ': valid.innerText = 'Not ok';
        console.log(pass.value)
        console.log(regexTest.test(pass.value));
    });
    
})();

=======

})();
>>>>>>> 483a70219c26a5ebfd388f5c373f93cab33c0080
