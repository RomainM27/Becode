//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello () {
            console.log("hello, "+ this.firstname + " " + this.lastname)
        }
    }

    let personne1 = new Person("Romain", "Mathieu");
    personne1.sayHello();
})();
