//Create a Rock-Paper-Scissors game using the console as a project



//Compare the function to compare the results from the computer and the user

//Create a function to receive a choice from the user as Rock, Paper or scissor.
let userChoice = prompt("Teste");
let userAnswer = getHumanChoice(userChoice);
console.log(userAnswer);

function getHumanChoice(choice){
    switch (choice){
        case `1`:
            return "ROCK";
        
        case `2`:
            return "PAPER";

        case `3`:
            return "SCISSOR";
    }

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



console.log("Hello")
