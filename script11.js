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