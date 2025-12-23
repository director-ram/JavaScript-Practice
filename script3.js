// Linked to index.html


//--- LOOPS ---
// while loop: runs until a certain condition is met
// do while loop: runs at least once, then checks the condition
// for loop: runs a specific number of times
// nested loop: a loop inside a loop
// break: breaks out of a loop
// continue: skips to the next iteration of a loop
// return: returns a value from a function
// yield: pauses and resumes a generator function
// async/await: asynchronous programming
// promise: a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



// ---while loop---
// let email= ""; //variable cannot be undefined in while loop
// while(email = ""){
//     console.log("username cannot be empty!");
// }
// console.log(`hello ${email}`);

// ---do while---
let loggedIn = false;
let name = window.firstName;
let password;

do{ //do while loop runs at least once, then checks the condition
   
    password = window.prompt("enter your password: ")
    if(password == "1234"){
        loggedIn = true;
    }
}while(password == "" || !loggedIn)
    console.log(`Hello ${name}`);
    console.log("login successfull!");
    window.alert("loggedIn");

//--- for loop---
for (let i = 10; i >= 0; i--){
    
    if(i == 3){
        continue;
    }else{
        console.log(`${i}`);
    }
}
console.log(`happy new year`);


