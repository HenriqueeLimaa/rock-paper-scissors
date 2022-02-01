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

function round(playerSelection, computerSelection){
    if(playerScore === 5){
        finalResult.textContent = "You win!";
    } else if(computerScore === 5){
        finalResult.textContent = "Computer win!";
    } else{
        if(playerScore + computerScore < 9){
            if(playerSelection === computerSelection){
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent = "I'ts a tie!";
            } else if(playerSelection === "rock" && computerSelection === "paper"){
                computerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`Computer win!\n${computerSelection} beats ${playerSelection}`;
            } else if(playerSelection === "rock" && computerSelection === "scissors"){
                playerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`You win!\n${playerSelection} beats ${computerSelection}`;
            } else if(playerSelection === "paper" && computerSelection === "rock"){
                playerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`You win!\n${playerSelection} beats ${computerSelection}`;
            } else if(playerSelection === "paper" && computerSelection === "scissors"){
                computerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`Computer win!\n${computerSelection} beats ${playerSelection}`;
            } else if(playerSelection === "scissors" && computerSelection === "rock"){
                computerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`Computer win!\n${computerSelection} beats ${playerSelection}`;
            } else if(playerSelection === "scissors" && computerSelection === "paper"){
                playerScore += 1;
                showScore.textContent = `Player score ${playerScore} - ${computerScore} Computer score`;
                roundResult.textContent =`You win!\n${playerSelection} beats ${computerSelection}`;
            }
        }
    }
}