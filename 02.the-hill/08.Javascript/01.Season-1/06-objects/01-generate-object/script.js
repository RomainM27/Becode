// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let Personne = {
            lastname: 'Mathieu',
            firstname: 'Romain',
            age: 24,
            city: 'Mons',
            country: 'Belgique'
        }
        console.log(Personne);
    })
})();
