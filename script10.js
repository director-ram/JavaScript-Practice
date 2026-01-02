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