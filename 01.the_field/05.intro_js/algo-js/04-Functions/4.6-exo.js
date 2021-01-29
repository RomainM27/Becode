
let total = 1;

factorial(5);

function factorial(a) {
    if (a >=1){
        total = total * a;
        if (a==1) {
            console.log(" Le factoriel est "+total);
        }
        a--;
        factorial(a);
    }
}


// Je n'arrive pas a retourner le nombre factoriel
// function factorial(a) {
//     if (a >=1){
//         total = total * a;
//         if (a==1) {
//             return total
//         }
//         a--;
//         factorial(a);
//     }
// }
