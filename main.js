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
        console.log("It's a draw!")
    }
    // Wins when
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore += 1;
    }
    // Loses When
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }
}


let round = 0; 

for (i = 5; round < i; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}