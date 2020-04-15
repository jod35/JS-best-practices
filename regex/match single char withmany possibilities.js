// this involves the use of []

// for example

let BigStr="big";
let BugStr="bug";
let BegStr="beg";
let BogStr="bog";

Regex=/b[ieu]g/;

console.log(BigStr.match(Regex)); // 'big'
console.log(BegStr.match(Regex));// 'beg'
console.log(BugStr.match(Regex));// 'bug'
console.log(BugStr.match(BogStr));//null since such a regex doesnt exist

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex);

console.log(result);

/* returns
[ 'e',
  'a',
  'e',
  'o',
  'u',
  'i',
  'e',
  'a',
  'o',
  'e',
  'o',
  'e',
  'I',
  'a',
  'e',
  'o',
  'o',
  'e',
  'i',
  'o',
  'e',
  'o',
  'i',
  'e',
  'i' ]

*/





