//Create a Rock-Paper-Scissors game using the console as a project
let humanScore = 0;
console.log("The human score is " + humanScore.toString());
let computerScore = 0;
console.log("The computer score is " + computerScore.toString());
let playRoundReturn = "";

playGame();

//Compare the function to compare the results from the computer and the user
function playRound(humanChoice, computerChoice){
    if (computerChoice == "ROCK"){
        switch (humanChoice){
            case "ROCK":
                return "It's a tie!";
                break;
            
            case "PAPER":
                humanScore++;
                playRoundReturn = "You win! PAPER beats ROCK";
                break;

            case "SCISSOR":
                computerScore++;
                playRoundReturn = "You lose! ROCK beats SCISSOR";
                break;
        }
    }

    if (computerChoice == "PAPER"){
        switch (humanChoice){
            case "ROCK":
                playRoundReturn = "You lose! PAPER beats ROCK";
                computerScore++;
                break;
            
            case "PAPER":
                playRoundReturn = "It`s a tie!";
                break;

            case "SCISSOR":
                playRoundReturn = "You win! SCISSOR beats PAPER";
                humanScore++;
                break;
        }
    }

    if (computerChoice == "SCISSOR"){
        switch (humanChoice){
            case "ROCK":
                playRoundReturn = "You win! ROCK beats SCISSOR";
                humanScore++;
                break;
            
            case "PAPER":
                playRoundReturn = "You lose! SCISSOR beats PAPER";
                computerScore++;
                break;

            case "SCISSOR":
                playRoundReturn = "It's a tie!";
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

//Create a function to play 5 rounds
function playGame (){
    console.log(`Entrou aqui na funcao`);
    for (let i = 0; i <= 5; i++) {
        console.log(`Entrou no for loop`);
        let choiceHuman = prompt("Please, insert your choice for the Rock Paper Scissors", "PAPER");
        let funHumanChoice = getHumanChoice(choiceHuman);
        let funComputerChoice = getComputerChoice();
        playRound(funHumanChoice, funComputerChoice);
        console.log(playRoundReturn);
    }

    if (computerScore > humanScore){
        console.log(`The computer wins with ${computerScore} and you lose with ${humanScore}`);
    }  
    else if (humanScore > computerScore){
        console.log(`The computer loses with ${computerScore} and you win with ${humanScore}`);
    } 
    else{
        console.log(`It's a tie between you two. I don't know how it is possible, but...`);
    }
}