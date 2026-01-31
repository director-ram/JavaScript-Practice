// linked to index5.html

// ---Class List---
// element property  in javascript used to interact with an element's list of classes(CSS classes)
// Allows you to make reusable classes for many elements accross your webpage.

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const mybtn = document.getElementById("myButton");

mybtn.classList.add("enabled"); // using add() method to add a class for css
// mybtn.classList.remove("enabled");// using reomve() method to remove a class

mybtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover"); // we can use toggle too: event.target.clasList.toggle("hover");, in mouse event too
    if (event.target.textContent === "disable") {
        event.target.textContent = "enable";
    }
    else {
        event.target.textContent = "disable";
    }
});
mybtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
    // event.target.textContent = "Button";
});

mybtn.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "enabled";
        event.target.classList.replace("disabled", "enabled");
    }
    else {
        event.target.classList.replace("enabled", "disabled");// using replace() method  to change between classes
        event.target.textContent = "disabled";
    }
});



// ---rock,paper,scissors(practice program)---
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const choices = ['rock', 'paper', 'scissor'];
const resultDisplay = document.getElementById("Result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT's a TIE!!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "You WIN!!😎" : "You LOOSE😒";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!!😎" : "You LOOSE😒";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You WIN!!😎" : "You LOOSE😒";
                break;
        }
    }
    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenTXT", "redTXT");

    switch (result) {
        case "You WIN!!😎":
            resultDisplay.classList.add("greenTXT");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "IT's a TIE!!":
            playerScore = playerScore;
            computerScore = computerScore;
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "You LOOSE😒":
            resultDisplay.classList.add("redTXT");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}



// ---Image slider---

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let slideInterval = null;

initializeSlide();

function initializeSlide() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        slideInterval = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(slideInterval);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}



// ---Callback Hell---
// situation in JS where callbacks are nested inside other callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous functions, use promises + async/await to avoid callback hell

function task1(callback) { // we pass other functions as arguments to call back that function after this executed.
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1500);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 2500);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1000);
}
function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 2000);
}
function task5(callback) {
    setTimeout(() => {
        console.log("Task 5 completed");
        callback();
    }, 1500);
}
function task6(callback) {
    setTimeout(() => {
        console.log("Task 6 completed");
        callback();
    }, 3000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        console.log("All tasks completed"); // if there are more function it looks like a pyramid and becomes more tough to read.
                    });
                });
            });
        });
    });
});



// ---Promise---
// An object that messages  asynchronus operations. Wrap a promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new promise((resolve, reject) => {asynchronous code})
// Order:-
// 1. create a promise
// 2. consume a promise
// 3. handle a promise

function walkDog() {
    return new Promise((resolve, reject) => { // using promise to handle asynchronus code
        setTimeout(() => {
            const walkedDog = true;
            if (walkedDog) {
                resolve("You Walk the Dog");
            }
            else {
                reject("You didnt walk the Dog");
            }
        }, 1000);
    })
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("You take out Trash");
            }
            else {
                reject("You didnt take the Trash out");
            }
        }, 2000);
    })
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("You did not clean the kitchen");
            }
        }, 1500);
    })
}
// using method chaining

// walkDog().then(value => { // value takes the returned value from the function
//     console.log(value);
//     return takeOutTrash();
// }).then(value => { // value becomes next function that returned at the end
//     console.log(value);
//     return cleanKitchen();
// }).then(value => {
//     console.log(value);
//     console.log("You completed all chores");
// }).catch(error => { // catch gets the value of reject and passes it as error
//     console.error(error);
// })



// ---Async/Await---
// Async = makes a function return a Promise
// Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous, Async doesnt have resolve or reject  paramaters
// Everything after Await is placed in an event queue

async function doChores() {  // instead of using method chaining we can use async/await, it improves code readability
    try {
        const chore1 = await walkDog();
        console.log(chore1);
        const chore2 = await takeOutTrash();
        console.log(chore2);
        const chore3 = await cleanKitchen();
        console.log(chore3);
        console.log("You completed all chores");
    } catch (error) {
        console.error(error);
    }
}
doChores();



// ---JSON---
// JavaScript Object Notation
// Used for exchaing data between a server and a web application JSON files {key:value} or [value1, value2, value3]

// JSON.stringify() = converts a JavaScript object into a JSON string
// JSON.parse() = converts a JSON string into a JavaScript object

const people = [{ name: "Mad", age: 48, isStudent: false },
{ name: "Sameer", age: 36, isStudent: false },
{ name: "Narendra", age: 50, isStudent: false },
{ name: "Hemasai", age: 22, isStudent: true }
];

const jsonPeople = JSON.stringify(people);
console.log(jsonPeople);

const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople);



// ---fetch---
// function used for making HTTP requests to fetch resources.(JSON style data, images, files)
// Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {method: "Options"}) options: PUT, GET, POST, DELETE

async function getPokemon() {
    const pokemonInput = document.getElementById("pokemonName");
    const pokemonName = pokemonInput.value.toLowerCase().trim();
    const errorDisplay = document.getElementById("errorDisplay");

    if (!pokemonName) {
        console.error("Please enter a pokemon name");
        errorDisplay.textContent = "Please enter a pokemon name";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonDisplay");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        console.log(data.name);
    }
    catch (error) {
        console.error(error);
    }
}



// --cookie---
// A small text file stored on your computer by a web browser.
// Used to store user preferences, login information, and other data.
// saved in name:value pairs

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    const expires = "expires" + date.toLocaleDateString();
    document.cookie = `${name}=${value}; ${expires}; path=/;`;
}

function getCookie(name) {
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    return cookieArray.find(cookie => cookie.startsWith(`${name}=`));
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

setCookie("username", "hemasai", 365);
setCookie("name", "Mad", 365);
console.log(getCookie("name"));
deleteCookie("username");
console.log(document.cookie);