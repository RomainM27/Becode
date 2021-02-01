
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        factorial(document.getElementById("number").value)
        // your code here

    });

})();

let total=1;
function factorial(a) {
    if (a >=1){
        total = total * a;
        if (a==1) {
            alert(" Le factoriel est "+total);
        }
        a--;
        factorial(a);
    }
}