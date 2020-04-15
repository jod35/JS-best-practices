let myStr="Mississipi";
//to match occurences of s 

let myRegex=/[s+]/g;
let sRegex=/[ss+]/g;

console.log(myStr.match(myRegex));
//returns [ 's', 's', 's', 's' ]
console.log(myStr.match(sRegex));

//returns [ 's', 's', 's', 's' ]