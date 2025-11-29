function getComputerChoice() {
    let computerGenerated = Math.round(Math.random() * 2);
    if (computerGenerated == 0) {
        return "rock";
    }
    else if (computerGenerated == 1) {
        return "paper";
    }
    else if (computerGenerated == 2) {
        return "scissor";
    }
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissor") {
        if (computerChoice == humanChoice) {
            result.innerHTML = `<h1>Your choice: ${humanChoice} & Computer choice: ${computerChoice}, hence it's a draw</h1>`;
        }
        else if (computerChoice == "paper" && humanChoice == "rock" || computerChoice == "rock" && humanChoice == "scissor" || computerChoice == "scissor" && humanChoice == "paper") {
            result.innerHTML = `<h1>Your choice: ${humanChoice} & Computer choice: ${computerChoice}, hence you loose</h1>`;
        }
        else if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "rock" && computerChoice == "scissor" || humanChoice == "scissor" && computerChoice == "paper") {
            result.innerHTML = `<h1>Your choice: ${humanChoice} & Computer choice: ${computerChoice}, Congrats! you WON</h1>`;
        }
    }
}

let menu = document.querySelector('#menu');
let result = document.querySelector('.result');

menu.addEventListener('click', (event) => {
    let humanSelection;

    if (event.target.id === "button1") humanSelection = "rock";
    if (event.target.id === "button2") humanSelection = "paper";
    if (event.target.id === "button3") humanSelection = "scissor";

    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
});
