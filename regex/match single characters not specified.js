//creating a set of characters we do not want to match

//these are called negated character sets
//we use the caret '^' to achieve this
// forexample

// the regex /[^aeiou]/; ignores all the vowels within a string

let myStr= "I bought 345 laptops last week and gave out only 100";

// to ignore all vowels and strings
let myRegex=/[^aeiou^0-9]/ig;

console.log(myStr.match(myRegex));

/*
this returns 
[ ' ',
  'b',
  'g',
  'h',
  't',
  ' ',
  ' ',
  'l',
  'p',
  't',
  'p',
  's',
  ' ',
  'l',
  's',
  't',
  ' ',
  'w',
  'k',
  ' ',
  'n',
  'd',
  ' ',
  'g',
  'v',
  ' ',
  't',
  ' ',
  'n',
  'l',
  'y',
  ' ' ]
  */

