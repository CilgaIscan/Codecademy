// Function declaration.
const shoutGreetings = arr =>{
    const newArr = arr.map(e => {
        return `${e.toUpperCase()}!`
    });
    return newArr ;
}

// Test.
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
