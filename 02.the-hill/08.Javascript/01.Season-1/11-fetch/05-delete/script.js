// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () =>{
        let hero_id = document.getElementById("hero-id").value;
        fetch(`http://localhost:3000/heroes/${hero_id}`,{
            method: 'DELETE',
        })        
    })
})();
