// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        window.lib.getPersons((error , pers) => {
            if (pers){
                console.log(pers);
            }else{
                console.log(error);
            }
            // try {
            //     console.log(pers)
            // } catch(error)  {
            //     console.log(error)
                
            // }
                
        }) 
    })
})();
