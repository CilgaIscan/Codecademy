// Declare function.
const toEmoticon = meaning => {
    meaning = meaning.toLowerCase();
    if(meaning === 'shrug') {
        return '|_{"}_|';
    }
    if(meaning === 'smiley face') {
        return ':)';
    }
    if(meaning === 'frowny face') {
        return ':(';
    }
    if(meaning === 'winky face') {
        return ';)';
    }
    if(meaning === 'heart') {
        return '<3';
    }
    else{
        return '|_(* ~ *)_|';
    }
}

// Test.
console.log(toEmoticon("whatever"))