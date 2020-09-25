const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput ==="rock" || userInput ==="paper" || userInput ==="scissors"){
        return userInput;
    }
    else if (userInput==="bomb"){}
    else{
        console.log("This is an error message. Please pick either rock, paper or scissors");
    }
}

console.log(getUserChoice("paper"));
console.log(getUserChoice("aba"));

const getComputerChoice =() =>{
    let randomNumber = Math.floor(Math.random()*2);
    switch (randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return "It is a tie."
    }
    if (userChoice === "rock"){
        if (computerChoice === "paper"){
            return "The computer won!"
        }
        else {
            return "You won!"
        }
    }
    if (userChoice === "paper"){
        if (computerChoice === "scissors"){
            return "The computer won!"
        }
        else{
            return "You won!"
        }
    }
    if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            return "The computer won!"
        }
        else{
            return "You won"
        }
    }
    if(userCoice==="bomb"){return "You won!"}
}

const playGame = () => {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();