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