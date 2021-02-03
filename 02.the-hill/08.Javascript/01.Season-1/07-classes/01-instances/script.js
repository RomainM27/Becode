// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    let skitty = new Cat("Skitty", 9);
    let Pixel = new Cat("Pixel", 6)
    console.log(skitty,Pixel)
})();
