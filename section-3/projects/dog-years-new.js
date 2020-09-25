// Declare myAge variable.
const myAge = 24;

// Declare earlyYears variable.
let earlyYears = 2;

// Reassign earlyYears.
earlyYears *= 10.5;

// Declare laterYears.
let laterYears = myAge - 2;

// Reassign laterYears.
laterYears *= 4;

// Log earlyYears and laterYears.
console.log(earlyYears);
console.log(laterYears);

// Declare myAgeInDogYears variable to store dog age.
let myAgeInDogYears = earlyYears + laterYears;

// Create myName variable.
const myName = "CILGA".toLowerCase();

// Log myName and dog year.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)