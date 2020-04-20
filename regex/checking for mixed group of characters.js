let word1="Pumpkin";
let word2="Penguin";

let myRegx=/P(umpk|engu)in/;

console.log(word1.match(myRegx));
console.log(word2.match(myRegx));

/*
[ 'Pumpkin',
  'umpk',
  index: 0,
  input: 'Pumpkin',
  groups: undefined ]
,
[ 'Penguin',
  'engu',
  index: 0,
  input: 'Penguin',
  groups: undefined ]

*/