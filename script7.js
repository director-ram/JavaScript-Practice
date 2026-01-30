// Linked to index2.html


// ---Arrow Functions---
// A concise way to write a function expression good for simple function that only use once
// (parameters) => some code

//const hello = (name) => console.log(`Hello ${name}`);
// hello(hemasai);

setTimeout(() => window.alert("Hello, Son Of a Bitch!"), 10000);

const numbers = [1, 2, 3, 4, 5, 6];
const Squares = numbers.map((element) => Math.pow(element, 2));
console.log(Squares);
const Total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(Total);



// ---Objects---
// A collection of related properties and methods can represent real world objects
// object = {key:value, function()};

const person1 = {
    firstName: "Neeraj",//these are 'key:value' pairs
    lastName: "Kumar",
    age: 21,
    isEmployeed: false,
    sayHello: () => console.log(`Hi!, im Neeraj Kumar,nice to meet you.`),
}

person1.sayHello();
console.log(person1.age);



// ---This---
//reference to the object where 'THIS' is used (object depends on the context)
// person.name = this.name
const person2 = {
    firstName: "Madhusudan",
    lastName: "Reddy",
    age: 21,
    sayHello: function () { console.log(`Hi!, im ${this.firstName} ${this.lastName},nice to meet you.`) },// THIS helps to access properties or keys and there values inside the object
    eat: () => console.log(`im eating...`),
}

// setTimeout(person2.sayHello(),5000);
person2.eat(person2.sayHello());
console.log(person2.age);



// ---Constructors---
// A special method for defining properties and methods of objects
function Cars(brand, model, year, color) {
    this.brand = brand,// this creates a constructor
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
            console.log(`You drive ${this.brand} ${this.model}`)//u can write 'this["brand"]'like this as well
        }
}

const cars1 = new Cars("Ford", "Mustang", 2021, "black");
const cars2 = new Cars("Toyota", "Supra", 2023, "white");
const cars3 = new Cars("BMW", "M4", 2024, "blue");

console.log(cars1.brand, cars2.model, cars3.color);
cars1.drive();
cars2.drive();
cars3.drive();



// ---Class---
//(ES6 feature) provides a more structured and cleaner way to work with objects
//compared to the traditonal constructor functions 
//ex: static keyword, encapsulation, inheritence

class Product {
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }

    displayProducts() {
        console.log(`Item: ${this.item}`);
        console.log(`Price: ₹${this.price.toFixed(2)}`);
    }

    taxes(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Hoddie", 1500);
const product2 = new Product("Cheenos", 2300);

product1.displayProducts();
product2.displayProducts();

const Cart = product1.taxes(salesTax) + product2.taxes(salesTax);
console.log(`The total price with tax is: ${Cart.toFixed(2)}`);



// ---Static---
//A keyword that defines properties or methods that belong to a class
//itself rather than the objects created from that class

class Maths {
    static PI = 3.141;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getArea(radius) {
        return this.PI * radius * radius
    }
}

let r = 10;

console.log(Maths.getDiameter(r).toFixed(1));//without creating an object we can access methods and properties from class if they were static.
console.log(Maths.getArea(r).toFixed(1));

//Example:
class User {
    static count = 0;
    constructor(userName) {
        this.userName = userName;
        User.count++;
    }
    displayName() {
        console.log(`Hi, im ${this.userName}!`);
    }

    static deleteUser() {
        console.log(`Your username has been deleted!!`);
        User.count--;
        console.log(User.count);
    }
}
const user1 = new User("Hemasai");
const user2 = new User("Madhu");
user1.displayName();
user2.displayName();
User.deleteUser();
console.log(`the current user count is ${User.count}`);



// ---Inheritence---
//allows a new class to inherit properties and methods from an existing class (parent -> child)
//helps with code reusability
//example:

class Animal {
    Alive = true;

    constructor(animal, age, speed) {
        this.animal = animal;
        this.age = age;
        this.speed = speed;
    }

    eat() {
        console.log(`the ${this.animal} is eating...`);
    }

    sleep() {
        console.log(`the ${this.animal} is sleeping...`);
    }

    bark() {
        console.log(`the ${this.animal} is barking...`);
    }

    roar() {
        console.log(`the ${this.animal} is roaring...`);
    }
}

class Lion extends Animal {
    animal = "Lion";

    running() {
        console.log(`the ${this.animal} is running...`);
    }
}

class Dog extends Animal {
    animal = "Dog";

    running() {
        console.log(`the ${this.animal} is running...`);
    }
}

class Cat extends Animal {
    animal = "Cat";

    running() {
        console.log(`the ${this.animal} is running...`);
    }
}

const lion = new Lion();
const dog = new Dog();
const cat = new Cat();

console.log(dog.Alive);
lion.eat();
lion.roar();
dog.sleep();
dog.bark();
cat.running();
cat.eat();



// ---Super---
//keyword is used in classes to call the constructor or access the properties and methods
//of a parent(super class)
//this = this object
//super = the parent

class Rabbit extends Animal {
    constructor(animal, age, speed) {
        super(animal, age, speed);
    }

    details() {
        console.log(`the animal is:${this.animal} of age:${this.age} runs at a speed of ${this.speed}kmph`);
        super.eat();
    }
}

class Fish extends Animal {
    constructor(animal, age, speed) {
        super(animal, age, speed);
    }

    details() {
        console.log(`the animal is:${this.animal} of age:${this.age} swims at a speed of ${this.speed}kmph`);
        super.sleep();
    }
}

class Hawk extends Animal {
    constructor(animal, age, speed) {
        super(animal, age, speed);
    }

    details() {
        console.log(`the animal is:${this.animal} of age:${this.age} Fly's at a speed of ${this.speed}kmph`);
    }
}

const rabbit = new Rabbit("rabbit", 3, 10);
const fish = new Fish("fish", 2, 6);
const hawk = new Hawk("Hawk", 5, 45);

rabbit.details();
fish.details();
hawk.details();