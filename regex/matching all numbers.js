const numVar="2001 A space oddyset";

const myEgex=/[0-9]/g; // this returns [ '2', '0', '0', '1' ]

console.log(numVar.match(myEgex));


//this can also be done with \d

const myRegex=/\d/g;
console.log(numVar.match(myRegex));

// [ '2', '0', '0', '1' ] the /d returns all numeric characters

console.log(numVar.match(myRegex).length);
//4