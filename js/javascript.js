//Create a Rock-Paper-Scissors game using the console as a project

//Create a way of receiving a guess from the user as Rock, Paper or scissor.

//Compare the function to compare the results from the computer and the user

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
