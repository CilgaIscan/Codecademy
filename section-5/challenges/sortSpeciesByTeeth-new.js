// Declate species array.
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Declare function.
function sortSpeciesByTeeth(arr){
    const order = (o1, o2) => o1.numTeeth > o2.numTeeth
    arr.sort(order)
    return arr
}

// Test.
console.log(sortSpeciesByTeeth(speciesArray))
