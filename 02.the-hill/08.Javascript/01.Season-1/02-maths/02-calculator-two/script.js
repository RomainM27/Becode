
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let one;
    let two;
    function getElement() {
        one = parseInt(document.getElementById("op-one").value);
        two = parseInt(document.getElementById("op-two").value);
    }

    const performOperation = operation => {
        // perform the operation
        getElement() 
        switch (operation) {
            case 'addition':
                alert(one + two);
                break;
            case 'substraction':
                if (one > two) {
                    alert(one - two);
                }
                else {
                    alert("The two is bigger ! so i inverse : "+(two - one) );
                }
                break;
            case 'multiplication':
                alert(one*two);
                break;
            case 'division':
                if (one > two) {
                    alert(one / two);
                }
                else {
                    alert("The two is bigger ! so i inverse : "+(two / one) );
                }
                break;
    
            default:
                alert("Probleme")
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id),false),
        ),
    );
})();
