// Declare canIVote.
function canIVote(age){
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}

// Test.
console.log(canIVote(16));
console.log(canIVote(28));