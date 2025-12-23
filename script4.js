// Linked to index.html


// ---number guessing game---
const maxNum = 100;
const minNum = 1;
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(randomNum, typeof(randomNum));
let attempts = 0;
let running = true;
document.getElementById("guess-btn").onclick = function(){
    if(!running) return;
        let guess = Number(document.getElementById("guess-input").value);//window.prompt("enter your guess: ");
      if(isNaN(guess)){
       document.getElementById("guess-result").textContent = "please enter a valid number!";
      }
      else if(guess < minNum || guess > maxNum){
       document.getElementById("guess-result").textContent = `please enter a number between ${minNum} and ${maxNum}!`;
      }
      else{
       attempts++;
       if(guess == randomNum){
           document.getElementById("guess-result").textContent = `you guessed it right in ${attempts} attempts!`;
           console.log(`you guessed it right in ${attempts} attempts!`);
           running = false;
       }else if(guess < randomNum){
           document.getElementById("guess-result").textContent = "too low!";
       }else{
           document.getElementById("guess-result").textContent = "too high!";
       }
      }
   };



//---function---
// the function is used to reuse the code and avoid repetition.

function add(x, y){ //parameters
    return x + y;
}
console.log(add(1, 2)); //arguments

function multiply(x, y){
    return x * y;
}
console.log(multiply(2, .3));

function subtract(x, y){
    return x - y;
}
console.log(subtract(5, 2));

function isEmail(email) {
    return email.includes("@")? "valid" : "invalid";
}
console.log(isEmail("test@test.com"));



// ---variable scope---
// variable scope = where a variable is recognized and accessible(local or global).

let x =1; // declared as global variable

function firstOne(){
    let x = 2; // declared as local variable
    console.log(`inside the function value of x is ${x} as local variable`);
}
function secondOne(){
    console.log(`inside the function value of x is ${x} as global variable`);
}

secondOne();
firstOne();



//---temperature conversion---
const toFahrenheit = document.getElementById("fahrenheit");
const toCelsius = document.getElementById("celsius");
const tempInput = document.getElementById("temp-input");
const tempResult = document.getElementById("temp-result");
function convert(){
    const temperature = parseFloat(tempInput.value);
    if(tempInput.value.trim() === ""){
        tempResult.textContent = "Please enter a temperature!!";
        console.log("Input is empty.");
        return;
    }
    else if(isNaN(temperature)){
        console.log("the input is not a number.");
        tempResult.textContent = "Enter a valid number!!";
        return;
    }
    else{
        if(toFahrenheit.checked){
        const result = (temperature * 9/5) + 32; //formula for celsius to fahrenheit
        tempResult.textContent = `${temperature}°C = ${result.toFixed(1)}°F`;//to type symbol (°) key shortcut is ALT(hold) and type 2+4+8 in numeric pad.
        console.log("temprature is converted to fahrenheit");
    }else if(toCelsius.checked){
        const result = (temperature - 32) * 5/9; //formula for fahrenheit to celsius
        tempResult.textContent = `${temperature}°F = ${result.toFixed(1)}°C`;
        console.log("temprature is converted to celsius");
    }
    else{
        tempResult.textContent = "please select a unit";
        console.log("please select a unit");
    }
    }
}



// ---Array---
// an array is a collection of items.
let fruits = ["apple", "orange", "pineapple"];//this is an array
console.log(fruits);
//to access the elements of an array, we use the index number.
fruits[0] = "banana";// we can replace or add another fruit in this way
console.log(fruits);
//to add a new fruit in the array, we use the push() method.
fruits.push("mango");
console.log(fruits);
//to remove the last element of the array, we use the pop() method.
fruits.pop();
console.log(fruits);
//to remove the first element of the array, we use the shift() method.
fruits.shift();
console.log(fruits);
//to add a new element in the beginning of the array, we use the unshift() method.
fruits.unshift("strawberry");
console.log(fruits);

let numOfFruits = fruits.length;// to know the length of the array.
console.log(numOfFruits);
let index = fruits.indexOf("orange");// to know the index of the element.
console.log(index);

fruits.sort();// to sort the array in ascending order.
console.log(fruits);

fruits.sort().reverse();// to sort the array in descending order.
console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}
//to print in reverse order
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}