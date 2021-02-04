let array1 = [1, 2, 3, 4, 5];
 
let array2 = [100, 101, 102];
let a = 0;

for (let int of array1) {
    a += int;
}

console.log(a);
a = 0;

for (let int of array2) {
    a += int;
}

console.log(a);