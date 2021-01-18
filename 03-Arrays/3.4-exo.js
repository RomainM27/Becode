let array1 = [4, 10, 7, 9, 5];
let max =0;
let min =0;
let test =0;

for (const int of array1) {
    
    if (int >= max) {
        max = int;
    }
    else if (int <= min){
        min =  int;
    }
}

console.log(max + "--max  min--" + min);
