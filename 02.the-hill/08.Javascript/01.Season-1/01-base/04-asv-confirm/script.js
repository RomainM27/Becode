
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    do {
        let age = prompt("votre age");
        let town = prompt("votre town");
        let gender = prompt("votre gender");
        alert (" votre age : "+age  + "\ntown : "+ town + "\n gener : "+gender)

    }while(!(confirm("Est-ce bien vos choix ? " )))
})();