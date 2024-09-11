//Create a Rock-Paper-Scissors game using the console as a project
let humanScore = 0;
console.log("The human score is " + humanScore.toString());
let computerScore = 0;
console.log("The computer socre is " + computerScore.toString());

let choiceHuman = prompt("Please, insert your choice for the Rock Paper Scissors", "PAPER");
let funHumanChoice = getHumanChoice(choiceHuman);
let funComputerChoice = getComputerChoice();
console.log("The computer choice is " + funComputerChoice);
let roundResult = playRound(funHumanChoice, funComputerChoice);
console.log(roundResult);
console.log("Now the human score is " + humanScore + " and the computer socre is " + computerScore)

//Compare the function to compare the results from the computer and the user
function playRound(humanChoice, computerChoice){
    if (computerChoice == "ROCK"){
        switch (humanChoice){
            case "ROCK":
                return "It's a tie!";
                break;
            
            case "PAPER":
                return "You win! PAPER beats ROCK";
                humanScore++;
                break;

            case "SCISSOR":
                return "You lose! ROCK beats SCISSOR";
                computerScore++;
                break;
        }
    }

    if (computerChoice == "PAPER"){
        switch (humanChoice){
            case "ROCK":
                return "You lose! PAPER beats ROCK";
                computerScore++;
                break;
            
            case "PAPER":
                return "It`s a tie!";
                break;

            case "SCISSOR":
                return "You win! SCISSOR beats PAPER";
                humanScore++;
                break;
        }
    }

    if (computerChoice == "SCISSOR"){
        switch (humanChoice){
            case "ROCK":
                return "You win! ROCK beats SCISSOR";
                humanScore++;
                break;
            
            case "PAPER":
                return "You lose! SCISSOR beats PAPER";
                computerScore++;
                break;

            case "SCISSOR":
                return "It's a tie!";
                break;
        }
    }

}

//Create a function to receive a choice from the user as Rock, Paper or scissor.
function getHumanChoice(choice){
    return choice.toUpperCase();

}

//Create a function that will return rock, paper or scissor with a random frequency as the computer
function getComputerChoice (){
    let rnm = Math.random();
    if(rnm >= 0 && rnm <= 0.33){
        return "ROCK";

    }else if(rnm > 0.33 && rnm <= 0.66){
        return "PAPER";

    }else if(rnm > 0.66 && rnm <= 1){
        return "SCISSOR";

    }
}
