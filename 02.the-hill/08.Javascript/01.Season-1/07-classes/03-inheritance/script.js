// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal{
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "miaou";
    }
    class Dog extends Animal{
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "woouf";
    }

    let dog1 = new Dog('Basile');
    let cat1 = new Cat('Chat1');
    console.log(cat1)
    console.log(dog1.sayHello());
    console.log(cat1.sayHello());
})();
