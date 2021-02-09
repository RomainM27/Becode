// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    
    let target = document.getElementById("target")
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", () =>{
            let targetText = target.innerText.split('');
            let idOfTheButton = button.id.split('-');
            switch (idOfTheButton[1]) {
                case 'one':
                    changeTarget(targetText,button,1,3)
                    break;
                case 'two':
                    changeTarget(targetText,button,4)
                    break;
                case 'three':
                    changeTarget(targetText,button,6)
                    break;
                case 'four':
                    changeTarget(targetText,button,8)
                    break;
                default:
                    alert("Wow you have break my program Nice !")
                    break;
            }
        });
    })
})();

function changeTarget(targetText,max,start,num = 2) {
    changeNumber = parseInt(targetText.splice(start,num).join(''));
    if (changeNumber < max.dataset.max){
        changeNumber++;
        if(changeNumber < 10){
            changeNumber = "0"+changeNumber;
        }
        changeNumber += "";
        max.innerHTML = changeNumber;
        changeNumberArray = changeNumber.split('')
        for (num; num >= 0; num--) {
            targetText.splice(start,0,changeNumberArray[num])
        }
        target.innerHTML = targetText.join('');
    }
}