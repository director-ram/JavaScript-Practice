let day = document.getElementById("day-input");
let btn = document.getElementById("day-btn");

btn.onclick = function(){
    let display;
    const dayValue = Number(day.value);
    switch(dayValue){
    case 1:
     display = "monday";
     break;
    case 2:
     display = "tuesday";
     break;
    case 3:
     display = "wednesday";
     break;
    case 4:
        display = "thursday";
        break;
    case 5:
        display = "friday";
        break;
    case 6:
        display = "saturday";
        break;
    case 7:
        display = "sunday";
        break;
    default:
        display = "Enter only numbers from 1-7";
    }
    console.log(display);
    document.getElementById("day-result").textContent = 
    display;
    //---method chaining---                                                                                                                                                                          
    let mobileNumber = "1213-456-789";
let show = mobileNumber.replaceAll("-", " ");
console.log(show,`,this is original format //${mobileNumber}`);
// mobileNumber.padEnd(14, "0");
// mobileNumber.padStart(14, "0");
// console.log(mobileNumber);


}
// ---logical operators---
// AND - &&
// OR - ||
// NOT - !
let temp = 42;
if(temp > 0 && temp <= 30){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}
// if(temp <= 0 || temp > 30){
//     console.log("The weather is bad!");
// }
// else{
//     console.log("The weather is good!");
// }

// ---operators---
// = assignment operator
// == equality operator
// === strict equality operator
// != not equality operator
// !== strict not equality operator