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