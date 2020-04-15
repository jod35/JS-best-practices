/*
if we want to return more than one instance of a pattern,
we use the g flag with the i flag
*/

//for example
var words='Twinkle Twinkle Twinkle Twinkle';
var wordsRegex=/Twinkle/gi;


console.log(words.match(wordsRegex));


//this returns all occurrences of the word 'Twinkle' in the sentence.