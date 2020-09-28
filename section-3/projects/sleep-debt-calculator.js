// Create getSleepHours.
const getSleepHours = day => {
    switch(day){
        case 'monday' : return 8;
        case 'tuesday' : return 8;
        case 'wednesday' : return 6;
        case 'thursday' : return 7;
        case 'friday' : return 6;
        case 'saturday' : return 8;
        case 'sunday' : return 9;
    }
}

// Test getSleepHours.
console.log(getSleepHours('monday'));
console.log(getSleepHours('sunday'));

// Create getActualSleepHours.
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Create getIdealSleepHours.
const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours*7;
}

// Test getActualSheepHours and getIdealSleepHours.
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// Create calculateSleepDebt.
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. You slept too much.');
    } else if(actualSleepHours === idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Perfect!');
    } else{
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

// Test calculateSleepDebt.
calculateSleepDebt();