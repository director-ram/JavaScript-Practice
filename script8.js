// ---Getter & Setter---
// getter = special method that makes a property readable
// setter = special method that makes a propert writeable

// validate and modify a value when reading/writing a property
//example:

class Rectangle{
    constructor(width, height){
        this.height = height;
        this.width = width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("the number should be greater than 0")
        }
    }

     set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("the number should be greater than 0")
        }
    }

    get width(){
        return `${this._width}cm`;
    }

    get height(){
        return `${this._height}cm`;
    }

    get area(){
        return `${(this._height * this._width)}cm^2`;
    }
}

const rectangle = new Rectangle(1000,2000);

rectangle.width = 10;
rectangle.height = 20;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



// ---Destructuring---
// extract values from arrays and objects,
// then assign them to variables in a convenient way
//  [] = to perform array destructuring
//  {} = to perform object destructuring

// ---Example 1---
//swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---Example 2---
// swap 2 elements in an array

const colors = ["red", "blue", "green", "black", "white"];

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors);

// ---Example 3---
//assign array elements to variables

const [firstColor, secondColor, thirdColor, ...fourthColor] = colors;

console.log(firstColor);
console.log(fourthColor);

// ---Example 4---
// extract values from objects

const student1 = {
    Name: "MAd",
    age: 22,
    sec: "A",
    dept: "B.E",
    branch: "CSE",
    isStudent: true,
}

const student2 = {
    Name: "sameer",
    age: 45,
    sec: "B",
    dept: "B.E",
    isStudent: true,
}

const {Name, age, sec, dept, branch = "ECE"} = student2;

console.log(Name, age, sec, dept, branch);

// ---Example 5---
//Destructure in a function parameters

function displayStudent({Name, age, sec, dept, branch = "ECE"}){
console.log(Name, age, sec, dept, branch);
}

displayStudent(student1);



// ---Nested Objects---
// objects inside of the other objects.
// Allows you to repersent more complex data structures, child object is enclosed by a parent object

const student3 = {
    Name: "Hemasai",
    age: 21,
    sec: "A",
    dept: "B.E",
    branch: "CSE",
    isStudent: true,
    hobbies: ["Games", 'Sports', "Movies", "Porn"],
    address: {
        Hno: "10/510-1",
        city: "Gudivada",
        state: "AP",
        country: "india",
    }
}

console.log(student3.Name);
console.log(student3.address);
// console.log(student3.hobbies[3]);
// console.log(student3.address.city);
for(const property in student3.address){
    console.log(student3.address[property]);
}

// Another Example
class Students{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(city, state, country){
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

const student4 = new Students("Neeraj", 76, "sangareddy", "telengana", "india");
const student5 = new Students("Narendra", 25, "kadapa", "AP", "india");

console.log(student4.name, student4.age, student4.address.city, student4.address.state);
console.log(student5.name, student5.age, student5.address.city, student5.address.state);