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
    if(event.target.textContent === "disable"){
        event.target.textContent = "enable";
    }
    else{
        event.target.textContent = "disable";
    }
});
mybtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
    // event.target.textContent = "Button";
});

mybtn.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent = "enabled";
        event.target.classList.replace("disabled", "enabled");
    }
    else{
        event.target.classList.replace("enabled", "disabled");// using replace() method  to change between classes
        event.target.textContent = "disabled";
    }
});



// ---rock,paper,scissors(practice program)---
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay =document.getElementById("computerDisplay");
const choices = ['rock','paper','scissor'];
const resultDisplay = document.getElementById("Result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT's a TIE!!";
    }
    else{
        switch(playerChoice){
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

    switch(result){
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