// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () =>{
        let res = await fetch("http://localhost:3000/heroes");
        let json = await res.json()
        json.forEach(xmen => {
            console.log(xmen)
        });
    })
})();
