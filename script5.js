// Linked to index2.html


//---spread operator---
// it allows an iterable such as an array or string to be expanded into separate elements, it represented as "..."

let fruits = ["apple", "orange", "grapes"];
let cars = ["volksWagon", "supra", "doge", "mercedes", "BMW", "tata"];
// let newFruits = [...fruits].join("-");
let items = [...fruits, ...cars, "banana", "toyota"].join(",");
console.log(items);

let response = document.getElementById("line");
document.getElementById("button").onclick = function(){
    response.textContent = "I told you shortcuts bastard use them.";

}



//---rest parameters---
// (...rest) allow a function work with a variable number of arguments bundling them into an array.
// spread = separates array into an Element.
// rest = combines or bundles elements into an array.

const car1 = "Mercedes";
const car2 = "Supra";
const car3 = "Mini-Cooper";
const car4 = "Dodge";
const car5 = "BMW";
const car6 = "Honda"
function showCars(...Cars){
    console.log(Cars);
}

showCars(car1, car2, car3, car4, car5, car6);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }return result / numbers.length;
}
const total = getAverage(72, 60, 59, 65, 92, 88);
// const total = sum(1, 2, 4, 6, 7);
console.log(total);

function combineStrings(...strings){
    return strings.join(" ");
}
let fullName = combineStrings("Mr.", "Hema", "Sai");
console.log(fullName);



// ---Dice Roller---

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("Dice-Result");
    const diceImages = document.getElementById("Dice-Images");
    const values = []; //for storing the values of random number generated
    const images = []; //for storing the images respective to the number generated in value

    if(numOfDice > 0){
        for(let i = 0; i < numOfDice; i++){ //to roll no.of dices entered in values
        const value = Math.floor(Math.random() * 6) + 1; //to generate a random number between 1 to 6
        values.push(value);
        images.push(`<img src="images/Dice-Images/${value}dice.png" alt="dice${value}.png"> `);
    }
    diceResult.innerHTML = `<span style="color:red;">dice</span>: ${values.join(",")}`;
    diceImages.innerHTML = images.join(' ');
    }
    else{
        diceResult.textContent = `Enter a number greater than 0`;
    }
}