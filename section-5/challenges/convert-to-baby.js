// Declare function.
function convertToBaby(arr) {
    const babyTalk = [];
    for(let i = 0; i < arr.length; i++) {
        babyTalk.push(`baby ${arr[i]}`);
    };
    return babyTalk;
}

// Test.
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));