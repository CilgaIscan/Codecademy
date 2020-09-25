// Create getUserChoice function to get input from user.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
        return userInput;
    }
    else if (userInput==="bomb"){
        return 'bomb'
    }
    else{
        console.log('This input is not applicable.')
    }
}

// Test getUserChoice.
console.log(getUserChoice('rock'));
console.log(getUserChoice('a'));

// Create getComputerChoice function to get input from computer.
const getComputerChoice = () =>{
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors'
    }
}

// Test getComputerChoice.
console.log(getComputerChoice());

// Create determineWinner function to determine the winner.
const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
        return 'It is a tie!';
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'You won!';
        } else{
            return 'The computer won!';
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'The computer won!';
        } else{
            return 'You won!';
        }
    }
    if(userChoice === "bomb"){
        return "You won!";
    }
}

// Test determineWinner.
console.log(determineWinner('paper', 'rock'));

// Create playGame function.
const playGame = () =>{
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('User choice is: ' +userChoice);
    console.log('Computer choice is: ' +computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

// Test playGame function.
playGame();