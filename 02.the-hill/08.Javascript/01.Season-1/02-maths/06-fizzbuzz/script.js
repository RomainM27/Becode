
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
    let i= 0;
    compte(i);
})();

function compte(i) {
    do {
        if ((i%3 == 0) && (i%5 == 0)) {
            console.log("fizzbuzz");
        }
        else if (i%3 == 0) {
            console.log("fizz");
        }
        else if (i%5 == 0) {
            console.log('buzz');
        }
        else {
            console.log(i)
        }
        i++;
    }while(i<101)

}