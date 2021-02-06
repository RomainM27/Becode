// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

     getPerso()
    })
})();
async function getPerso() {
    try {
    let perso = await window.lib.getPersons();
    console.log(perso);
    } catch(err) {
        console.log(err)
    }

}