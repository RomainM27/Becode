let array1 = [1, 2, 3, 4, 5];
let array2 = [];
let array3 = [];

// for (let int of array1) {
//     array1.push(int);
// } Ca continue à l'infini aie..

for (let int of array1) {
    array2.push(int);
}
console.log(array2);

array3 = array1.slice(); // cree une copie si pas de valeur rentré
// Si on met des valeur on peut choisir ce qu'on copie

console.log(array3);