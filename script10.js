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
    display.value = "";
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
const allSelects = document.querySelectorAll("li");
allSelects.forEach(allSelect => {
    allSelect.style.padding = 10;
});



// ---DOM Navigation---
// The process of navigation the structure of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibiling
// .previousElementSibiling
// .parentElement
// .children

// .firstElementChild example:
const ulElement = document.querySelectorAll("ul");
ulElement.forEach(ulelement => {
    const firstChild = ulelement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild example:
ulElement.forEach(ulelement => {
    const lastChild = ulelement.lastElementChild;
    lastChild.style.backgroundColor = "orange";
});

// .nextElementSibiling example:
const element = document.getElementById("apple");
const nextElement = element.nextElementSibling;
nextElement.style.backgroundColor = "red";
nextElement.style.color = "white";

// .previousElementSibiling example:
const elementpre = document.getElementById("cabage");
const previousElement = elementpre.previousElementSibling;
previousElement.style.backgroundColor = "blue";
previousElement.style.color = "yellow";

// .parentElement example:
const elementParent = document.getElementById("orange");
const parent = elementParent.parentElement;
parent.style.fontFamily = "arial";

// .children example:
const elementChild = document.getElementById("vegetables");
const children = elementChild.children;
Array.from(children).forEach( child => {
    child.style.padding = "10px";
});
children[2].style.backgroundColor = "black";
children[2].style.color = "white";

// example to create an element
const newH1 = document.createElement("h1");// it creates a element in html, we can use it to create any type of element
newH1.textContent = `Calculator`;
newH1.id = "myH1"; // this assigns a id to element
newH1.style.color = "blue"; //this styles the element without changing anything in css file
newH1.style.textAlign = "center";
newH1.style.fontWeight = "bold";

// example for append to html

//document.body.append(newH1); // this inserts the newH1 content at the Bottom of the html
document.body.prepend(newH1); // this inserts the newH1 content a the Top
//document.getElementById("display").append(newH1);  // with this you can insert it inside a div or particular element with the id vice versa you can prepend to put it on top

// const currElem = document.getElementById("box2");
//document.body.insertBefore(newH1, currElem);  // this inserts the newH1 before box2 id i.e with this we can insert a element b/w two div

// const classes = document.querySelectorAll(".operator-btn");
// document.body.insertBefore(newH1, classes[2]);  // this helps with elements that didnt have id, by accessing thier class we can insert

// example for removing an element

document.body.removeChild(newH1); // to reomve a element within a body
// document.getElementById("display").removeChild(newH1);  // to remove an element inside a div or element



// ---Event Listener---
// Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback);

const button = document.getElementById("myBtn");

button.addEventListener("click", event =>{
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Fuck you nigga 😡🤬";
    event.target.style.transition = "0.5s ease";
});

button.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Caution ⚠️";
    event.target.style.transition = "0.5s ease";
});

button.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "click here ⬇️";
    event.target.style.transition = "0.5s ease";
});



// ---Key Events---
// listen for specific events to create interactive web page
//  events: keydown, keyup
// syntax: document.addEventListener(event, callback);
const moveDistance = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", () => {
    button.textContent = "click here 👌👈🍑";
});

document.addEventListener("keyup", () => {
    button.textContent = "click here ⬇️";
});
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp" :
                y -= moveDistance;
                break;
            case "ArrowDown" :
                y += moveDistance;
            break;
            case "ArrowLeft" :
                x -= moveDistance;
            break;
            case "ArrowRight" :
                x += moveDistance;
            break;
        }
            button.style.top = `${y}px`;
            button.style.left = `${x}px`;
    }
    console.log(event.key);
});



// ---Node List---
// Static collection of HTML elements (id, class, element)
// can be created using querySelectorAll()
// most likely an array, but no(map, filter, reduce)
// NodeList won't update automatically to refelect changes
let buttons = document.createElement("button"); // To create an element inside the Body

buttons.textContent = "button5";
buttons.classList = "btn";

document.body.appendChild(buttons); // To push a new child into DOM

buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach(button => { // To apply the condition on every child of body or an element
    button.style.backgroundColor = "hsla(206, 100%, 50%, 1.00)";
    button.style.color = "white";
    button.textContent += "✅";

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "hsla(206, 86%, 20%, 1.00)";
        button.style.transition = "0.5s ease-in";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "hsla(206, 100%, 50%, 1.00)";
        button.style.transition = "0.5s ease-in";
    });

    const originalText = button.textContent; // For restoring the original text after text changed in first click
    button.addEventListener("click", (event) => {
        if(event.target.textContent === "clicked!"){
            event.target.textContent = originalText;
            event.target.style.backgroundColor = "hsla(206, 100%, 50%, 1.00)";
        }
        else{
            event.target.textContent = "clicked!";
            event.target.style.backgroundColor = "hsla(206, 80%, 70%, 1.00)";
        }
    });
});

// to remove the element on click:
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".btn");
        console.log(buttons);
    });
});