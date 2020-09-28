// Construct array.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Check original length.
console.log(secretMessage.length);

// Remove last string of array.
secretMessage.pop();

// Check arr.length.
console.log(secretMessage.length);

// Add words to array.
secretMessage.push("to", "Program");

// Change word.
secretMessage[7]="right";

// Remove first string.
secretMessage.shift();

// Add string to beginning of array.
secretMessage.unshift("Programming");

// Remove strings and replace.
secretMessage.splice(6,12, "know,");

// Join sentence.
console.log(secretMessage.join(' '));