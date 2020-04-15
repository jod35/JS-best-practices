var sentence="Let me have some fun with Javascript";

// to test for the occurence of letters 'un'
// i use the . operator/wildcard
var sentRegex=/.un/;

console.log(sentRegex.test(sentence));

//this returns true because of the word ;'fun'