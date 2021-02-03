// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    const buildmapf = Object.fromEntries(fromentrief(keys,values));
    console.table(buildmapf);
})()


function fromentrief(keys,values){
    const mappp = new Map();
    for(let i = 0; i < keys.length; i++) {
        mappp.set(keys[i], values[i]);
    };
    return  mappp
};
