// Declare function.
function findMyKeys(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]=='keys'){
            return i
        }
    }
    return -1
}

// Test.
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
