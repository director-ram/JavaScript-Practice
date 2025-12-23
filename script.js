// Linked to index.html


console.log("Hello this is a practice session for javascript");// to print the text in console
window.alert("the java script is working");// displays as a popup

let age = window.prompt("enter your age: ");
let cgpa = 7.5;

if(age >= 18){
    console.log("access granted.");
    window.alert("Success.")
console.log(`your age is ${age} and your CGPA is ${cgpa}`);
console.log(typeof age);
document.getElementById("p3").textContent = `your old enough to enter this site.`;
//let student = 60;
// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student % 2;
// student = student ** 2;
// student += 1;
// student -= 1;
// student *= 2;
// student /= 2;
// student %= 2;
// student **= 2;
// student ++;
// student --;

//console.log(student);

let result = 1+2+3**2+8/2;
console.log(result);

document.getElementById("H2").textContent = "if this appears, that means javascript is included in html then DOM is successful.";
document.getElementById("p1").textContent = "this para has been inserted into HTML by using javascript.";
document.getElementById("p2").textContent = `the CGPA is ${cgpa} and the avarage is ${result}`;


let userName;
document.getElementById("submit").onclick = function(){ 
            // username = document.getElementById("text").value;
            userName = document.getElementById("text").value;
            console.log(`hi ${userName}, welcome to javascript practice session`, typeof userName);
            document.getElementById("message").textContent = `what is that ${userName} username it isn't cool, set a cool name dude`;
            let space = userName.startsWith(" ") || userName.endsWith(" ");
            // ---method chaining---
            let username = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
            console.log(username);

if (space){
    console.log("username should not start or end with space");
}
else {
    console.log(username);
}
}

age = Number(age);
 //old += 1;
console.log(age, typeof age);

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let myLabel = document.getElementById("myLabel");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    myLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count --;
    myLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    myLabel.textContent = count;
}

const card = document.querySelector(".card");
const container = document.querySelector(".card-container");

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    const rotateX = (y / rect.height) * 55;
    const rotateY = (x / rect.width) * -55;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

// let x = 3.21;
// let y = 4;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.abs(x);
// z = Math.min(x, y);
// z = Math.max(x, y);
// z = Math.random();

//console.log(z);

const roll = document.getElementById("Roll");
const dice = document.getElementById("Dice");
const max = 6;
const min = 1;
let randomNum;

roll.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    dice.textContent = " = " + randomNum;
    if (randomNum === 6) {
        alert("You rolled a 6! Great job!");
    } else {
        alert(`You rolled a ${randomNum}. Try again!`);
    }
}


// ---while loop---
let email;
do{
    email = window.prompt("enter your e-mail: ");
}while(email == "" || email == null)

// ---slice methods---
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1 );
let firstName = email.slice(0, email.indexOf("@")); 
let lastName = email.slice(email.indexOf("@") +1);
// let lastName = fullName.slice(fullName.indexOf("@") + 1);
console.log(firstName);
console.log(lastName);
window.firstName = firstName;
window.alert(`welcome ${firstName}`);
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 9);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// console.log(userName.trim());
// console.log(userName.startsWith(" "));
// console.log(userName.endsWith(" ")); 
// console.log(userName.length);
 

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

}
else {
    console.log("restricted access, you can't use any feature in this site.");
    window.alert("your not old enough to enter this site, you must be 18+.");
}





