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


