let quit="qu";
let noquit="qt";

let quRegex=/q(?=u)/;
let qRegex=/q(?!u)/;

console.log(quit.match(quRegex)); //q
console.log(noquit.match(qRegex)); //q

