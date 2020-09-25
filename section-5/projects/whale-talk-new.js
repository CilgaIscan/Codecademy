// Declate input to translate.
let input = 'siniftaki cicekler ve bocekler';

const whale = input =>{

//Declare array of vowels.
    const vowels = ["a","e","i","o","u"];

// Create result array.
    let resultArray = [];

// Loop.
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(vowels[j]==input[i]){
                resultArray.push(input[i]);
                if(input[i]=="e" || input[i]=="u"){
                    resultArray.push(input[i]);
                }
            }

        }
    }
    console.log(resultArray.join("").toUpperCase());
}


// Test.
whale(input);
