// Create story, overusedWords and unnecessaryWords variables.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Split words and push them to storyWords array.
let storyWords = story.split(' ');

// Check storySplit array's length.
let wordCount = console.log(storyWords.length);

// Create betterWords.
let betterWords = storyWords.filter(elem=>{return !unnecessaryWords.includes(elem)});

// Get overusedWords.
const over = storyWords.filter(elem=>{return overusedWords.includes(elem)}).length;

// Create exclamation.
const exclamation = [".",",","!"];
const exc = storyWords.filter(elem => {return exclamation.includes(elem[elem.length-1])}).length;


// Log data.
console.log('Word count: ' +wordCount+ ' '+ 'Sentence count: ' + exc + ' The number of times each overused word appears: ' +over)

console.log(betterWords.join(' '))