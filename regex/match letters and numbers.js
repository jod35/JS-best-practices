// the hyphen '-' character works in this case
let jonathanemail="jod35";
let myRegx=/[a-z0-9]/ig;

console.log(jonathanemail.match(myRegx));

/*returns [ 'j', 'o', 'd', '3', '5' ]*/


let username= "ssalijo245jonathan";
//the regex
let myRegex=/[a-z0-9a-z]/ig;
console.log(username.match(myRegex));

/*returns [ 's',
's',
'a',
'l',
'i',
'j',
'o',
'2',
'4',
'5',
'j',
'o',
'n',
'a',
't',
'h',
'a',
'n' ]
*/