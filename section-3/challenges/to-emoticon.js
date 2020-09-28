// Declare function.
const toEmoticon = meaning => {
    meaning = meaning.toLowerCase();
    if(meaning === 'shrug') {
        return '|_{"}_|';
    } else if(meaning === 'smiley face') {
        return ':)';
    } else if(meaning === 'frowny face') {
        return ':(';
    } else if(meaning === 'winky face') {
        return ';)';
    } else if(meaning === 'heart') {
        return '<3';
    } else{
        return '|_(* ~ *)_|';
    }
}

// Test.
console.log(toEmoticon("whatever"))