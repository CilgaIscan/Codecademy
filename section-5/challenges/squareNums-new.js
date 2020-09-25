// Create variables.
const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

// Declare function.
function squareNums (arr){
    return arr.map(toSquare);
}

// Test.
console.log(squareNums(numbers));