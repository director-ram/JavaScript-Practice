// linked to index3.html

// ---setTimeout---
// function in JS that allows you to schedule the execution
// of a function after an amount of time(miliseconds)
// Times are approximate(varies based on the workload of the JS runtime env.)

//clearTimeout() = can cancel a timeout before it triggers

let timeOut;
const msg = document.getElementById("msg");

function startTimer(){
    timeOut = setTimeout(() => msg.textContent = `Hello the timer completed!`,5000);
    setTimeout(() => msg.textContent = ` `, 10000)
}

function clearTime(){
    clearTimeout(timeOut);
    msg.textContent = `Timer has been stopped`;
}



// ---Digital Clock---

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridien = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const Time = `${hours}:${minutes}:${seconds} ${meridien}`;
    document.getElementById("clock").textContent = Time;
}

setInterval(updateClock, 1000); //setInterval works like setTimeout but it calls the function continously in a set of time mentioned not once.



// ---Stop Watch---

const display = document.getElementById("display");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}

function reset(){
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clearInterval(timer);
    display.textContent = "00:00:00:00";
}

function update(){
    const current = Date.now();
    elapsedTime = current - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}



// ---ES6 Module---
// AN external file that contains resuable code that can be imported into another JS file
// that includes classes, variables, methods and more...
// introduced as part of ECMAScript 2015 update
// creating a script9.1.js file to write functions in it and import them here.

import { getMessage } from "./script9_1.js";

console.log(`the imported message is: "${getMessage()}"`)