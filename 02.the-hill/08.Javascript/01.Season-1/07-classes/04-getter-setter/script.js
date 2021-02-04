// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor (firstname,lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `${this.firstname} ${this.lastname}`
        }

        set fullname(name) {
            [this.firstname, this.lastname]= name.split(" ");
        }

    }
    let perso1 = new Person("reo", "Math");
    console.log(perso1.name);
    perso1.fullname="romain mathieui";
    console.log(perso1.name);
})();
