// 11-fetch/03-details/script.js - 11.3: details

const target = document.getElementById("target");
const template = document.getElementById("tpl-hero");
const content = template.content.querySelector("li");
const hero_id = document.getElementById("hero-id");

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () =>{
        let res = await fetch("http://localhost:3000/heroes");
        let Xmens = await res.json()

        xmenDisplay(hero_id.value,Xmens)
    })
})();


function xmenDisplay(id,Xmens){
    let cloneContent = document.importNode(content,true);
    cloneContent.children[0].children[0].textContent += Xmens[id].name;
    cloneContent.children[0].children[1].textContent += Xmens[id].alterEgo;
    cloneContent.children[1].textContent += Xmens[id].abilities;
    target.appendChild(cloneContent);
}