//...
// helps us to spread over an iterable like an array
    // for example

const even=[0,2,4,6,8];
const odd=[1,3,5,7,9];
const combined=[0,2,4,6,8,...even];

console.log(combined);
// [ 0, 2, 4, 6, 8, 0, 2, 4, 6, 8 ]

//it can be used everywhere
const friends=['jordan','jeremiah','jannet'];
const all=[...odd,friends];
console.log(all);
// [ 1, 3, 5, 7, 9, [ 'jordan', 'jeremiah', 'jannet' ] ]

//constructing an array using the spread operator

let initial=['A','B','C'];
let letters=[...initial,'D','E'];
console.log(letters);
// [ 'A', 'B', 'C', 'D', 'E' ]

//concatenating arrays using the spread operator
const first=['A','B'];
const second=['C','D'];

const comb=[...first,...second];
console.log(comb); //[ 'A', 'B', 'C', 'D' ]


//copying an array
const scores=[10,12,23,34,45];
const copiedScores=[...scores]; //[ 10, 12, 23, 34, 45 ]
console.log(copiedScores);



