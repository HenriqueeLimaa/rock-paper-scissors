//List of game options. Used in the computerChoice function.
const options = ["rock", "paper", "scissors"];

//Keep track of the scores
let playerScore = 0;
let computerScore = 0;

//Get a random number and use it to return an option in the list "options".
function computerChoice() {    
    let compRandom = Math.floor(Math.random() * 3); 
    return options[compRandom];
}

//Show a prompt asking the user input. Converts it into lowerCase and returns it.
function playerChoice() {
    let player_prompt = prompt("Rock, paper or scissors?").toLowerCase();
    return player_prompt;
}

//Compare the user and computer inputs. Increment the score if someone win and return a message.
function round(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "I'ts a tie!";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore += 1;
        return `Computer win!\n${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        return `You win!\n${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore += 1;
        return `You win!\n${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore += 1;
        return `Computer win!\n${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore += 1;
        return `Computer win!\n${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1;
        return `You win!\n${playerSelection} beats ${computerSelection}`;
    }
    else {
        return "Invalid input";
    }
}

//Loop 5 times through the round function, asking new inputs each loop and printing the current score
//In the end, send a message with the winner and the scores.
function game(){

    for(let i=1; i<=5; i++){
        console.log(round(playerChoice(), computerChoice()));
        console.log(`player score = ${playerScore}`);
        console.log(`computer score = ${computerScore}`);
    }
    
    let winner;
    if(playerScore > computerScore){
        winner = `You are the winner with ${playerScore} points!\nComputer points=${computerScore}.`;
    } else if(computerScore > playerScore){
        winner = `The computer won with ${computerScore} points!\nYou got ${playerScore} points.`;
    } else {
        winner = `I'ts a tie!\nPlayer score=${playerScore}.\nComputer score=${computerScore}.`;
    }
    return console.log(winner);
}

//Call the game function to start the game.
game();
