// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    
    document.getElementById("run").addEventListener("click", () => { 
    const ois = birds[Math.floor(Math.random() * birds.length)];
    const ajd = Math.floor(Math.random() * adjectives.size);

    let i = 0;
    let ajdName;
    for (const item of adjectives) {
        if (i === ajd) {
            ajdName = item;
            break;
        }
        i++
    }

    document.getElementById('target').innerHTML = getTheName(ois, ajdName) ; 
    
    });

})();


function getTheName(ois, adj) {
    return ois.fem ? 'La '+ois.name+ ' '+adj+'e' : 'Le '+ois.name+ ' '+adj;
}