// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot
(() => {
    let test;
    // your code here
    
    let inputAleaArray = document.querySelectorAll("input");
    
    // tout les input je les mets dans des intervals (pour pouvoir les clears)
    let input0 = setInterval(() =>{
        inputAleaArray[0].value = alea(inputAleaArray[0])
        }, 500);
    let input1 = setInterval(() =>{
        inputAleaArray[1].value = alea(inputAleaArray[1])
        }, 500);
    let input2 = setInterval(() =>{
        inputAleaArray[2].value = alea(inputAleaArray[2])
        }, 500);
    let input3 = setInterval(() =>{
        inputAleaArray[3].value = alea(inputAleaArray[3])
        }, 500);
    


    let target = document.getElementById("target")
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", () =>{
            let targetText = target.innerText.split(''); // recupere le numero et le met dans un tableau
            let idOfTheButton = button.id.split('-');// recupere l id du boutton
            let inputAlea = document.querySelector(`#part-${idOfTheButton[2]}`);
            switch (idOfTheButton[2]) {
                case 'one':
                    clearInterval(input0);// arrete l aleatoire
                    changeTarget(targetText,inputAlea,1,3);// change les valeurs dans le num de tel
                    break;
                case 'two':
                    clearInterval(input1)
                    changeTarget(targetText,inputAlea,4)
                    break;
                case 'three':
                    clearInterval(input2)
                    changeTarget(targetText,inputAlea,6)
                    break;
                case 'four':
                    clearInterval(input3)
                    changeTarget(targetText,inputAlea,8)
                    break;
                default:
                    alert("Wow you have break my program Nice !")
                    break;
            }
        });
    })
})();

function changeTarget(targetText,alea,start,num = 2) {
    targetText.splice(start,num); // supp en fonction de ce qui est demande 
    if(alea.value < 10){
        alea.value = "0"+alea.value; // si le chiffre est en dessous de 9 rajoute un 0 devant
    }
    changeNumberArray = alea.value.split(''); // ale est un string, je le mets dans un tableau
    for (num; num >= 0; num--) {
        targetText.splice(start,0,changeNumberArray[num]); // j ajoute dans le num de tel
    }
    target.innerHTML = targetText.join('');
}

// aleatoire en fct du max et min
function alea(input){
    return Math.floor(Math.random() * (input.dataset.max - input.dataset.min)) + parseInt(input.dataset.min);// have to parseint the last cuz its +, dont know why with the * its okay
}

/* mieux
(() => {

    // your code here
    function addZero(n){
    return (n>9) ? ""+n : "0"+n;
    }
    function createPhoneNumber(){
        let partOne = addZero(parseInt(document.getElementById("part-one").value));
        let partTwo = addZero(parseInt(document.getElementById("part-two").value));
        let partThree = addZero(parseInt(document.getElementById("part-three").value));
        let partFour = addZero(parseInt(document.getElementById("part-four").value));
        let phoneNumber = "+0"+partOne + partTwo + partThree + partFour;
        return phoneNumber;
    }
    function pickRandomValue(btnId){
        let target = document.getElementById("target");
        let btnClicked = document.getElementById("part-"+btnId);
        let minNumber = parseInt(btnClicked.getAttribute("data-min"));
        let maxNumber = parseInt(btnClicked.getAttribute("data-max"));
        let randomNumber = minNumber + Math.trunc(Math.floor(Math.random() * (maxNumber - minNumber) * 100)/100);
        btnClicked.value = addZero(randomNumber);
        target.innerHTML = createPhoneNumber();
    }
    document.getElementById("fix-part-one").addEventListener("click",()=> {pickRandomValue("one");});
    document.getElementById("fix-part-two").addEventListener("click",()=> {pickRandomValue("two");});
    document.getElementById("fix-part-three").addEventListener("click",()=> {pickRandomValue("three");});
    document.getElementById("fix-part-four").addEventListener("click",()=> {pickRandomValue("four");});
})();
*/