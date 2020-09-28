// Set kelvin variable to 293.
const kelvin = 293;

// Set celsius variable to 273 degrees less than kelvin.
let celsius = kelvin - 273;

// Calculate fahrenheit from given celsius degree.
let fahrenheit = celsius * (9/5) + 32 ;

// Round down fahrenheit value.
fahrenheit = Math.floor(fahrenheit);

// Run.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Declare newton variable using celsius.
let newton = Math.floor(celsius * (33/100));

// Run.
console.log(`The temperature is ${newton} degrees Newton.`)