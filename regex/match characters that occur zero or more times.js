// the * sign matches zero or more occurences

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; //zero or more occurences of a letter 'g' or 'o'
console.log(soccerWord.match(goRegex));
 // Returns ["goooooooo"]
console.log(gPhrase.match(goRegex));
// Returns ["g"]
console.log(oPhrase.match(goRegex));
//null