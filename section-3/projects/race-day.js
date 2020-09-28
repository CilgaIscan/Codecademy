// Generate random races.
let raceNumber = Math.floor(Math.random()*5);

// Create earlyRegister.
const earlyRegister = false;

// Declare runnerAge.
let runnerAge = 16;

if (earlyRegister === true && runnerAge > 18) {
    raceNumber +=1000;
}
// Determine race time for early adults.
else if(earlyRegister === true && runnerAge >18) {
    console.log("Your race will start at 9:30 am. " +raceNumber);
}
// Determine race time for late adults.
else if(earlyRegister === false && runnerAge >18) {
    console.log("Your race will start at 11:00 am. " +raceNumber);
}
// Determine race time for young contestants.
else if(runnerAge < 18) {
    console.log("Your race will start at 12:30 am. " +raceNumber);
}
// Determine race time for 18 years old people.
else if(runnerAge === 18) {
    console.log("Please see registration desk.");
}