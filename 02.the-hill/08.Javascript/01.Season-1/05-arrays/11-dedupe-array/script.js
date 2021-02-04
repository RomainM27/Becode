// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
        let test =  fruits.reduce(
            (acc,currentValue) => {
            if (acc.indexOf(currentValue) === -1) {
                acc.push(currentValue);
            }
            return acc;
        }, []) // [] obligatoire pour dire que acc est un tableau
        console.log(test);
    })
    // your code here

})();
