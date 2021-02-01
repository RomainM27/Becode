// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
    let array = document.getElementById("numbers").value.split(",")
    console.log(array)
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("numbers").value =  array.sort((a,b)=>a-b);
    });

})();
