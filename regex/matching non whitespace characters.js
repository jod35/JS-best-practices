// this is done using the \S

const myStr="This is my life.";

const myRegex=/\S/g;

console.log(myStr.match(myRegex));
// this returns an array of all letters
//[ 'T', 'h', 'i', 's', 'i', 's', 'm', 'y', 'l', 'i', 'f', 'e', '.' ]


