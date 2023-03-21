


/**
 * Array of choices and function to randomly return a string from an array
 * ~~ replaces Math.floor 
 */

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    
    return myArray[~~(Math.random() * myArray.length)];

}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase()
    if(computerSelection == playerSelection){
        return "Tie game"
    }
    else{
        return "No you suck"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));