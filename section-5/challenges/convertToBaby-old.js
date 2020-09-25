// Write your code here:
function convertToBaby(arr){
    const babies = [];
    for(let i=0; i < arr.length; i++){
        babies.push(`baby ${arr[i]}`);
    }
    return babies;
}






// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))

