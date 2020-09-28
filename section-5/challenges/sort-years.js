// Function declaration.
function sortYears(arr) {
    arr.sort();
    const reversed = arr.reverse();
    return reversed;
}

// Test.
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
console.log(sortYears(years));