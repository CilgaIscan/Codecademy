// Declare function reverseArray.
const reverseArray = arr => {
    // Create reverse array.
    let reversed = [];
    // Loop.
    for(let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    // Return reversed array.
    return reversed;
};

// Test.
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));
