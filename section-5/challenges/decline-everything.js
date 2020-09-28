// Create veggies array.
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

// Declare politelyDecline to decline veggies.
const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Declare declineEverything.
function declineEverything(arr) {
    arr.forEach(politelyDecline);
}

// Declare acceptEverything.
const acceptEverything = (arr) => {
    arr.forEach((elem) => console.log(`Ok, I guess I will eat some ${elem}.`))
}

// Test.
acceptEverything(veggies)