// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    const buildmapf = Object.fromEntries(fromentrief(keys,values));
    console.table(buildmapf);
<<<<<<< HEAD
    console.log(fromentrief(keys,values));
=======
>>>>>>> 483a70219c26a5ebfd388f5c373f93cab33c0080
})()


function fromentrief(keys,values){
    const mappp = new Map();
<<<<<<< HEAD
    // test = keys.map((v,i) => ({[v]: values[i]}))   a retest
    for(let i = 0; i < keys.length; i++) {
        mappp.set(keys[i], values[i]);
    };
    return  mappp;
=======
    for(let i = 0; i < keys.length; i++) {
        mappp.set(keys[i], values[i]);
    };
    return  mappp
>>>>>>> 483a70219c26a5ebfd388f5c373f93cab33c0080
};
