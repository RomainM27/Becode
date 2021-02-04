// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    
    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    let i=0;
    document.getElementById("run").addEventListener("click", () => {
        do {
            console.log(fruits[i]);
            i++
        }while(i< fruits.length)
    }
    )
    // your code here

})();
