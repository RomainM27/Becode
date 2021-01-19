let array1 = [9, 11, 5, 7, 10];
let max =array1[0];
let min =array1[0];
let test =0;

for (const int of array1) {
    
    if (int >= max) {
        max = int;
    }
    if (int <= min){
        min =  int;
    }
}

console.log(max + "--max  min--" + min);
