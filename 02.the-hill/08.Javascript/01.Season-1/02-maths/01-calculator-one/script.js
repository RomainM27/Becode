
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let one;
    let two;
    function getElement() {
        one = parseInt(document.getElementById("op-one").value);
        two = parseInt(document.getElementById("op-two").value);
    }
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        getElement();
        alert (one + two);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        getElement();
        if (one > two) {
            alert(one - two);
        }
        else {
            alert("The two is bigger ! so i inverse : "+(two - one) );
        }
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        getElement();
        alert(one*two);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        getElement();
        if (one > two) {
            alert(one / two);
        }
        else {
            alert("The two is bigger ! so i inverse : "+(two / one) );
        }
    });
})();
