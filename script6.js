// Linked to index.html


// ---Random Password Generator---

function randomPassword(lowerCase, upperCase, Numbers, Symbols, Length){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "@*&$!%^₹-_=+";

    let allowedChars = "";
    let password = "";

    allowedChars += lowerCase? lowercaseChars : "";
    allowedChars += upperCase? uppercaseChars : "";
    allowedChars += Numbers? numbersChars : "";
    allowedChars += Symbols? symbolsChars : "";

    if(Length <= 0){
        return "Password must be atleast 8 characters!";
    }
    if(allowedChars.length === 0){
        return 'Password must contain a specail character';
    }
    for(let i = 0; i < Length; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const lowerCase = true;
const upperCase = true;
const Numbers = true;
const Symbols = true;
const passwordLength = 10;

const Password = randomPassword(lowerCase, upperCase, Numbers, Symbols, passwordLength);

console.log(`generated password: ${Password}`);

function generate(){
    document.getElementById("password").textContent = `Generated password: ${Password}`;
}



//--- call back ---
// callback is a function that is passed as argument to another function.
// used to handle asynchronous operations:
//     1. read a File
//     2. network requests
//     3. interacting with database

// Example

// function Hello(callback){ //this takes another function as parameter and executes after it completes it execution.
//     console.log('Hello!');
//     callback();
// }


// function bye(){
//     console.log('Good Bye!');
// }
// Hello(bye);
//passing bye() funciton as arugment to Hello() function.

function Sum(callback, x, y){
   let result = x + y;
    callback(result);
    return result;
}

function display(result){
    console.log(result);
}

function displayDOM(){
    let X = Number(document.getElementById("callBackValue").value);
    let Y = Number(document.getElementById("callBackValue2").value);
    let Result = Sum(display, X, Y);
    document.getElementById("callback").textContent = `using callback the sum of ${X} & ${Y} is: ${Result}`;
}



// ---For Each---
// Method used to iterate over the Elements of an array and apply  a specified function to each element
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(square);
numbers.forEach(displayArray);
// numbers.forEach(cube);

function triple(element, index, array){// element, index, array are provided.
    array[index] = element * 3;
}
function double(element, index, array){
    array[index] = element * 2;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
function displayArray(element){
    console.log(element);
}

let Fruits = ["apple", "banana", "orange", "strawberry"];

// fruits.forEach(uppercase);
// fruits.forEach(lowercase);
Fruits.forEach(capitalize);
Fruits.forEach(displayFruits);
function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function displayFruits(element){
    console.log(element);
}



// ---Map---
// accepts a function and applies it to every element of an array and returns a new array.
//example
// const students = ["vishal","mad","Bunty","sameer"];

// const CapStudents = students.map(Up);
// console.log(CapStudents);

// function Up(element){
//     return element.toUpperCase();

// }
const dates = ["02-12-2024","12-13-2025","08-14-2026"];//format in mm-dd-yyyy
const formatedDates = dates.map(format);//returned format in dd-mm-yyyy
console.log(formatedDates);

function format(element){
    let parts = element.split("-");//splits where it finds the symbol.
    return `${parts[1]}-${parts[0]}-${parts[2]}`;//placing dates as your country format and output looks like 12-02-2024
}



// --- filter ---
// creates a new array by filtering out elements.

const ages = [10,15,18,14,12,28];
const Adults = ages.filter(isMajor);
const Children = ages.filter(isMinor);
console.log(Adults);
console.log(Children);

function isMajor(element){
    return element >= 18;
}

function isMinor(element){
    return element < 18;
}



// ---reduce---
// reduces elements of an array into a single value

const marks = [65,24,70,45,90,82];
const MAX = marks.reduce(getMax);
const MIN = marks.reduce(getMin);
console.log(MAX);
console.log(MIN);

function getMax(accumlator, element){
    return Math.max(accumlator, element);
}

function getMin(accumlator, element){
    return Math.min(accumlator, element);
}



// ---function expression---
// a way to define function as a value or variable
//it is different from function decleration.
// 1.callbacks in asynchronous operations
// 2.Higher-Order functions
// 3.Clousers
// 4.Event Listners

//Example

// const Greet = function Hello(){//we can pass this inside of a function to reduce code writting.
//     console.log("Hello");
// }
// Greet();

const powFour = numbers.map(function(element){return Math.pow(element, 4);});//instead of writing function decleration, we can write the function inside a another fucntion without a function name is a function expression.
console.log(powFour);

const total = numbers.reduce(function(accumlator, element){return accumlator + element;});
console.log(total);

setTimeout(function(){console.log("Hello!");}, 10000);