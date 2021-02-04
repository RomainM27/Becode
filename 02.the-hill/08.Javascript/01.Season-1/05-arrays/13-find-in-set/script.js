// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
        "Alexandre",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        console.log(people.size);
        if (people.has("Alexandre")) {
            console.log(people)
        }
    })

})();
