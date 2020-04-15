//if i want to match a regex with letters in a specific order of the alphabet
//we use the hyphen character '-'


//to match letter from 'a' to 'e' would be 'a-e'
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
 // Returns ["cat"]
console.log(batStr.match(bgRegex));
// Returns ["bat"]
console.log(matStr.match(bgRegex));
//null
