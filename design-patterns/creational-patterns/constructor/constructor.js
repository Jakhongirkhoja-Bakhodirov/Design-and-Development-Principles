function Human(name , age , occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.describe = function() {
        console.log(`${this.name} is ${this.age} year old ${this.occupation}`);
    }
};

const person = new Human('Joe' , '23' , 'Engineer');

person.describe();