const div = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div5")
const buttonReplay = document.createElement("button")

buttonReplay.textContent = "Replay"



const util = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return util[parseInt(Math.random()*3)];
}

function getHumanChoice() {
    let cmp = String(prompt("Use the values: rock, paper or scissors"));
    cmp = cmp.toLowerCase();

    if (util.includes(cmp)){
        return cmp;
    } else getHumanChoice();
}

function playRound(humanChoice, computerChoice) {

    
    
    if (humanChoice == computerChoice) {
        div2.textContent = "It's a draw!"
    }
    // Wins when
    if (humanChoice == "rock" && computerChoice == "scissors") {
        div2.textContent = "You win! Rock beats Scissors"
        humanScore += 1;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        div2.textContent = "You win! Paper beats Rock"
        humanScore += 1;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        div2.textContent = "You win! Scissors beats Paper";
        humanScore += 1;
    }
    // Loses When
    if (humanChoice == "rock" && computerChoice == "paper") {
        div2.textContent = "You lose! Paper beats Rock";
        computerScore += 1;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        div2.textContent = "You lose! Scissors beats Paper";
        computerScore += 1;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        div2.textContent = "You lose! Rock beats Scissors";
        computerScore += 1;
    }
    
    if (humanScore == 5) {
        div2.textContent += "  |||You Won|||  "
    }
    
    if (computerScore == 5) {
        div2.textContent += "  |||The Computer Won|||  "
    }
    if (humanScore == 5 || computerScore == 5) {
        buttonRock.removeEventListener("click", playRock)
        buttonPaper.removeEventListener("click", playPaper)
        buttonScissors.removeEventListener("click", playScissors)
        div2.append(buttonReplay)
        buttonReplay.addEventListener("click", () => {
            buttonReplay.remove()
            
            div2.textContent = ""
            div3.textContent = ""
            div4.textContent = ""
            start()
        })
    }
    div3.textContent = "Human Score: " + humanScore
    div4.textContent = "Computer Score: " + computerScore
    
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
}


// let round = 0; 

// for (i = 5; round < i; round++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

const buttonRock = document.createElement("button")
const buttonPaper = document.createElement("button")
const buttonScissors = document.createElement("button")

buttonRock.textContent = "Rock"
buttonPaper.textContent = "Paper"
buttonScissors.textContent = "Scissors"

const playRock = () => playRound("rock", getComputerChoice())
const playPaper = () => playRound("paper", getComputerChoice())
const playScissors = () => playRound("scissors", getComputerChoice())

function start() {
    humanScore = 0
    computerScore = 0

    buttonRock.addEventListener("click", playRock)
    buttonPaper.addEventListener("click", playPaper)
    buttonScissors.addEventListener("click", playScissors)
}

start()
    
div.appendChild(buttonRock)
div.appendChild(buttonPaper)
div.appendChild(buttonScissors)