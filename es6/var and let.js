//var lets variables be declared globally and locally if they are within blocks

let counter; // this makes it a varible be block scoped

//the var makes is easy to redeclare a function
var key=0;
var key;

console.log(key); //logs 0


//however if we log counter, we get an error
let counter=0;
console.log(counter);
// SyntaxError: Identifier 'counter' has already been declared
