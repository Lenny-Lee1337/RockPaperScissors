
let computerScore = 0;
let playerScore = 0;


/**
 * Array of choices and function to randomly return a string from an array
 * ~~ replaces Math.floor 
 */

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    
    return myArray[~~(Math.random() * myArray.length)];

}

/**
 * play one round of the game, if player wins, add one to player score, if computer wins, add 1 to computer score.
 
 */

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase()
    if(computerSelection == playerSelection){
        return "Tie game"
    }
   
       else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
        computerScore = ++computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`
         
      } else{
        playerScore = ++playerScore;
        return `You win${playerSelection} beats ${computerSelection}`
      }
}
    


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));