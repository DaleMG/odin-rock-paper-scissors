let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock','paper','scissors']
    const randomNum = Math.floor (Math.random() * 3)
    const compChoice = choices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tied"
    }
    else if ((playerSelection=='rock') && (computerSelection=='paper')) {
        computerScore++
        return "You lose! Paper beats Rock"
    }
    else if ((playerSelection=='rock') && (computerSelection=='scissors')) {
        playerScore++
        return "You win! Rock beats Scissors"
    }
    else if ((playerSelection=='paper') && (computerSelection=='scissors')) {
        computerScore++
        return "You lose! Scissors beats Paper"
    }
    else if ((playerSelection=='paper') && (computerSelection=='rock')) {
        playerScore++
        return "You win! Paper beats Rock"
    }
    else if ((playerSelection=='scissors') && (computerSelection=='rock')) {
        computerScore++
        return "You lose! Rock beats Scissors"
    }
    else if ((playerSelection=='scissors') && (computerSelection=='paper')) {
        playerScore++
        return "You win! Scissors beats Paper"
    }
}



function game() {
    for (round = 0; round < 5; round++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        return "You Win!"
    }
    else if (playerScore < computerScore) {
        return "You Lose!"
    }
    else {
        return "It's a Tie!"
    }
}

console.log(game())
