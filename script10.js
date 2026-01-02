// ---Calculator Program---

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try{
        display.value = eval(display.value);//eval is like a built in calculator module it completes the calculation of the input
    }
    catch(error){
        display.value = `Enter valid inputs`;
    }
}
function clearDisplay(){
    display.value = "0";
}



// ---DOM---
// document object model (object{ }) that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structers all the elements in a tree-line representation.
// JS can access the DOM to dynamically change the content, structure, and style of a web page.

const message = document.getElementById("message");

function execute(){
    const userName = document.getElementById("user-input").value;
    message.textContent = userName === "" ? 'Welcome, Mother Fucker!' : `Welcome, ${userName}!`;
    // setTimeout(() => message.textContent = "", 5000);
    console.log(userName);
}



// ---Element selectors---
// Methods used to target and manipulation HMTL elements, they allow you to select one or more html elements from the
// DOM

// 1. document.getElementById()  // Element or null
// 2. document.getElementsClassName() // HTML collection
// 3. document.getElementsByTagName() // HTML collection
// 4. document.querySelector()  // Element or null
// 5. document.querySelectorAll()  // NodeList

// ById
// message.style.color = "red";
// message.style.fontSize = "bolder" //manipulating Element in HTMl via JS

// // ByClassName
// const className = document.getElementsByClassName("operator-btn");
// console.log(className); // getting all the elements with same class name as a html collection
// Array.from(className).forEach(classname => { // type casting all the values in elements into a array.
//     classname.style.backgroundColor = "yellow";
// });

// // ByTagName
// const btnElement = document.getElementsByTagName("button");
// for(let element of btnElement){
//     element.style.color = "white";
//     element.style.fontFamily = "calibiri";
// }

// // querySelecotr
// const label = document.querySelector("input");  // query selects the first matching element mentioned tag name
// label.style.backgroundColor = "orange";

// // querySelectorAll
// // it is same as query selecotr but can access all elements inside a tag
// const allSelects = document.querySelectorAll("h2");
// allSelects.forEach(allSelect => {
//     allSelect.style.backgroundColor = "red";
// });