let selectElementsStartingWithA = (array) => {
    let arrayofA = [];
    array.forEach(ele => {
        if (ele.startsWith("a")){
            arrayofA.push(ele);
        }
    })
    return arrayofA;
}

let selectElementsStartingWithVowel = (array) => {
    let vowel_list = 'aeiouAEIOU';
    let arrayOfVowel = []
    array.forEach(ele => {
        for (let i = 0; i < vowel_list.length; i++) {
            if (ele[0] == vowel_list[i])
            arrayOfVowel.push(ele)
        }
    });
    return arrayOfVowel
}

let removeNullElements = (array) => {
    let arrayOfNanNull = []
    array.forEach(ele => {
        if (ele){
            arrayOfNanNull.push(ele)
        }else if(ele == false){
            arrayOfNanNull.push(ele)
        }
    });
    return arrayOfNanNull
}

let removeNullAndFalseElements = (array) => {
    let arrayOfNanNull = []
    array.forEach(ele => {
        if (ele){
            arrayOfNanNull.push(ele)
        }else if( parseInt(ele) == 0){ // surement degueulasse
            arrayOfNanNull.push(ele)
        }
    });
    return arrayOfNanNull
}

let reverseWordsInArray = (array) => {
    let arrayReturnOneByOne = []
    array.forEach(ele => {
        arrayReturnOneByOne.push(ele.split("").reverse().join(""))
    })
    return arrayReturnOneByOne;
}

let everyPossiblePair = (array) => {
    let pairs = (array) => array.map( (v, i) => array.slice(i + 1).map(w => [w, v]) ).flat();
    return pairs(array).sort();
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3)
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    function endComparator(a,b) {
        if (a.slice(-1) < b.slice(-1)) return -1;
        if (a.slice(-1) > b.slice(-1)) return 1;
        return 0;
    }
    return array.sort(endComparator);
}

let getFirstHalf = (string) => {
    return string.substr(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let i = 0;
    array.forEach(ele =>{
        if (ele.split("").reverse().join("") == ele){
            i +=1;
        }
    })
    return i;
}

let shortestWord = (array) => {
    let teststring = "tttttttttttttttttttttt";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < teststring.length)
        teststring=array[i]
    }
    return teststring
}

let longestWord = (array) => {
    let teststring = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > teststring.length)
        teststring=array[i]
    }
    return teststring
}

let sumNumbers = (array) => {
    return array.reduce((prev, curr) => prev + curr);
}

let repeatElements = (array) => {
    array.forEach(ele=>{
        array.push(ele)
    })
    return array
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    //const average = array => array.reduce((prev, curr) => prev + curr) / array.length;
    return array.reduce((prev, curr) => prev + curr) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    arrayMove5 = []
    for (let i = 0; i < 6; i++) {
        arrayMove5.push(array[i])
    }
    return arrayMove5
}

let convertArrayToObject = (array) => {
    object = Object.assign(...array.map(v,w => ({ [v]: w })));
    return object;
}

let getAllLetters = (array) => {
    let arrayOfWord = []
    let arrayOfWords = []
    array.forEach(ele =>{
        arrayOfWord.push(ele.split(''))
        arrayOfWord.forEach(ele => arrayOfWords.push(ele))
    })
    //arrayOfWords.split(",")
    return arrayOfWords;
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
