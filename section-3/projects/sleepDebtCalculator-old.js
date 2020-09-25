const getSleepHours = day =>{
    if(day==="Monday"){
        return 8;
    }
    else if(day==="Tuesday"){
        return 7;
    }
    else if(day==="Wednesday"){
        return 7;
    }
    else if(day==="Thursday"){
        return 6;
    }
    else if(day==="Friday"){
        return 6;
    }
    else if(day==="Saturday"){
        return 9;
    }
    else if(day==="Sunday"){
        return 10;
    }
    else{
        return "Not a day."
    }
}


const getActualSleepHours = () =>{
    return getSleepHours("Monday")+getSleepHours("Tuesday")+getSleepHours("Wednesday")+getSleepHours("Thursday")+getSleepHours("Friday")+getSleepHours("Saturday")+getSleepHours("Sunday");
}

const getIdealSleepHours = () =>{
    const idealHours = 7;
    return idealHours*7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log("Balanced");}
    else if(actualSleepHours > idealSleepHours){
        console.log("You sleep " +calculateSleepDebt+ ", be more active");}
    else if(actualSleepHours < idealSleepHours){
        console.log("You sleep " +calculateSleepDebt+ ". Wanna take a nap")}
}

calculateSleepDebt();