let myStr ="The story was unending";
let myRegex=/unending$/;

console.log(myStr.match(myRegex));

/*
[ 'unending',
  index: 14,
  input: 'The story was unending',
  groups: undefined ]
*/