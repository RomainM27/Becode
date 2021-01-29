let a =  134234;
function Divisors(number) {
    let array = [];
    let divisor;
    for (i=2 ; i<((number/2)+1) ; i++) {
        divisor = number/i;
        if(Number.isInteger(divisor)) {
            array.push(i);
        }
    }
    if (array.length == 0){
        return console.log("Nothing (it's a prime number)")
    }
    else {
        return array;
    }
}


console.log(Divisors(a));