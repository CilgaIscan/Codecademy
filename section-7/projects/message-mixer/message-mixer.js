// Declare the module.
const MessageMixer = {
    // Create an object element to count characters.
    countCharacter: function countCharacter(inputString, inputCharacter) {
        let count = 0;
        let string = inputString.toLowerCase();
        let character = inputCharacter.toLowerCase();
        for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
                count++;
            }
        }
        return count;
    },
    // Create an object element to capitalize first characters of each word.
    capitalizeFirstCharacterOfWords: function capitalizeFirstCharacterOfWords(string) {
        let arr = string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            arr[i] = word[0].toUpperCase() + word.substring(1);
        }
        return arr.join(" ");
    },
    // Create an object element to reverse a single word.
    reverseWord: function reverseWord(word) {
        return word.split("").reverse().join("");
    },
    // Create an object element to reverse all words
    reverseAllWords:function reverseAllWords(sentence) {
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = MessageMixer.reverseWord(words[i]);
        }
        return words.join(" ");
    },
    // Create an object element to replace first occurrence.
    replaceFirstOccurrence: function replaceFirstOccurrence(string, toBeReplaced, replaceWith) {
        return string.replace(toBeReplaced, replaceWith);
    },
    // Create an object element to replace all occurrences.
    replaceAllOccurrences: function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
        return string.split(toBeReplaced).join(replaceWith);
    },
    // Create an object element to encode.
    encode: function encode(string) {
        let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
        for (let key in replacementObject) {
            string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
        }
        return string;
    },
    // Create an object element to create palindrome.
    palindrome: function palindrome(string) {
        return `${string} ${MessageMixer.reverseWord(string)}`;
    },
    // Create an object to split spaces and join back.
    pigLatin: function pigLatin(sentence, character) {
        return sentence.split(' ').join(character + ' ');
    }
};

// Export the module.
export default MessageMixer;