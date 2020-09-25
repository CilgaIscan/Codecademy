let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge=24;
if (earlyRegister === true && runnerAge >18){
    raceNumber+=1;
}
if (runnerAge >18 && earlyRegister === true){
    console.log("You will race at 9.30 am." + raceNumber);
}
else if(runnerAge >18 && earlyRegister ===false){
    console.log("You will race at 11.00 am." + raceNumber);
}
else if(runnerAge < 18){
    console.log("You will race at 12.30 pm." + raceNumber);
}
else{
    console.log(" Go to registration desk");
}
