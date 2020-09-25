// Function declaration.
function isTheDinnerVegan(arr){
    const a1 = arr.map((elem)=>elem.source === 'plant')
    return a1.reduce((acc, currElem) => acc && currElem, true)
}

//Test.
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(dinner))
