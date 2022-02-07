//////////////////////////////////
const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

/////////////////////////////////
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    round('rock', computerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    round('paper', computerChoice());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    round('scissors', computerChoice());
});
////////////////////////////////
const showResult = document.querySelector('.results');
const showScore = document.querySelector('#score');
const roundResult = document.querySelector('#round-result');
const finalResult = document.querySelector('#final-result');

///////////////////////////////

function computerChoice() {    
    let compRandom = Math.floor(Math.random() * 3); 
    return options[compRandom];
}

///////////////////////////////
function checkGameOver(){
    if(playerScore === 5){
        finalResult.textContent = "You win!";
    }else if(computerScore === 5){
        finalResult.textContent = "Computer win!";
    }
}

function increasePlayerScore(computerSelection, playerSelection){
    return playerScore += 1,
    showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`,
    roundResult.textContent =`You win!\n${playerSelection} beats ${computerSelection}`;
}

function increaseComputerScore(computerSelection, playerSelection){
    return computerScore += 1,
    showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`,
    roundResult.textContent =`Computer win!\n${computerSelection} beats ${playerSelection}`;
}

function tie(){
    return showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`,
    roundResult.textContent = "I'ts a tie!"
}
///////////////////////////////

function round(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        tie();
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        increaseComputerScore(computerSelection, playerSelection);
        checkGameOver();
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        increasePlayerScore(computerSelection, playerSelection);
        checkGameOver();
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        increasePlayerScore(computerSelection, playerSelection);
        checkGameOver();
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        increaseComputerScore(computerSelection, playerSelection);
        checkGameOver();
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        increaseComputerScore(computerSelection, playerSelection);
        checkGameOver();
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        increasePlayerScore(computerSelection, playerSelection);
        checkGameOver();
    }
}
