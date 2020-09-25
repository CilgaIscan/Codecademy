// Declare agreeOrDisagree.
const agreeOrDisagree = (str1, str2) => {
    if(str1 == str2){
        return 'You agree!';
    } else{
        return 'You disagree!';
    }
}

// Test.
console.log(agreeOrDisagree('abc', 'def'));
console.log(agreeOrDisagree('abc', 'abc'));