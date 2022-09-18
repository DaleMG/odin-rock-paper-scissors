let playerScore = 0
let computerScore = 0

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome')

function getComputerChoice() {
    const choices = ['rock','paper','scissors']
    const randomNum = Math.floor (Math.random() * 3)
    const compChoice = choices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const p = document.createElement('p');
        p.innerText = "Tied"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='rock') && (computerSelection=='paper')) {
        computerScore++
        const p = document.createElement('p');
        p.innerText  = "You lose! Paper beats Rock"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='rock') && (computerSelection=='scissors')) {
        playerScore++
        const p = document.createElement('p');
        p.innerText  = "You win! Rock beats Scissors"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='paper') && (computerSelection=='scissors')) {
        computerScore++
        const p = document.createElement('p');
        p.innerText  = "You lose! Scissors beats Paper"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='paper') && (computerSelection=='rock')) {
        playerScore++
        const p = document.createElement('p');
        p.innerText  = "You win! Paper beats Rock"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='scissors') && (computerSelection=='rock')) {
        computerScore++
        const p = document.createElement('p');
        p.innerText  = "You lose! Rock beats Scissors"
        outcomeDiv.appendChild(p)
    }
    else if ((playerSelection=='scissors') && (computerSelection=='paper')) {
        playerScore++
        const p = document.createElement('p');
        p.innerText  = "You win! Scissors beats Paper"
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerSelection,computerSelection) => {
    if (playerScore ==5) {
        const h3 = document.createElement('h3');
        h3.innerText = `you won | you ${playerScore} vs computer ${computerScore}`
        outcomeDiv.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = 'Refresh page to play again';
        outcomeDiv.appendChild(p);
        document.querySelectorAll('button').forEach(element => element.disabled = true);
    }
    if (computerScore ==5) {
        const h3 = document.createElement('h3');
        h3.innerText = `you lost | you ${playerScore} vs computer ${computerScore}`
        outcomeDiv.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = 'Refresh page to play again';
        outcomeDiv.appendChild(p);
        document.querySelectorAll('button').forEach(element => element.disabled = true);
    }
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    checkForWinner(playerSelection,computerSelection);
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    checkForWinner(playerSelection,computerSelection);
})
scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    checkForWinner(playerSelection,computerSelection);
}) 
