


/**
 * Array of choices and function to randomly return a string from an array 
 */
const myArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    return myArray[~~(Math.random() * myArray.length)];

}