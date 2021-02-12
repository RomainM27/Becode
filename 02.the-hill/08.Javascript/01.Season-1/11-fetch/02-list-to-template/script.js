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
/*
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(response => {
                let xmenList = response;
                for (let i = 0; i < xmenList.length; i++) {
                    // Utilise la balise template pour reproduire une structure html pour chaque héros.
                    // <template id="tpl-hero">
                    let template = document.getElementById("tpl-hero");
                    // https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
                    let cloneTemplate = template.content.cloneNode(true);
                    // affiche dans la balise dont l'id est "target"
                    let target = document.getElementById("target");
                    target.appendChild(cloneTemplate);
                    // target.children[i] renvoie à <li class="hero">
                    // target.children[i].children[0] renvoie à <h4 class="title">
                    // target.children[i].children[0].children[0] renvoie à <strong class="name">
                    target.children[i].children[0].children[0].innerHTML = xmenList[i].name;
                    // target.children[i].children[0].children[1] renvoie à <em class="alter-ego">
                    target.children[i].children[0].children[1].innerHTML = xmenList[i].alterEgo;
                    // target.children[i].children[1] renvoie à <p class="powers">
                    target.children[i].children[1].innerHTML = xmenList[i].abilities;
                }
            });
    })
*/
