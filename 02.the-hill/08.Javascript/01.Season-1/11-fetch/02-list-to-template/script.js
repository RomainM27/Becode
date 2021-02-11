const target = document.getElementById("target");
const template = document.getElementById("tpl-hero");
const content = template.content.querySelector("li");

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () =>{
        let res = await fetch("http://localhost:3000/heroes");
        let Xmens = await res.json()
        console.log(Xmens[2])
        for (let i = 0; i < Xmens.length; i++) {
            // obligatoire pour pouvoir utiliser le += a revoir
            let cloneContent = document.importNode(content,true);
            cloneContent.children[0].children[0].textContent += Xmens[i].name;
            cloneContent.children[0].children[1].textContent += Xmens[i].alterEgo;
            cloneContent.children[1].textContent += Xmens[i].abilities;
            target.appendChild(cloneContent);
        }
    })
})();
