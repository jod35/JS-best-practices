//using splice, we can remove more than one item from an array from anywhere
let myArray=[1,2,3,4,5,6,7,8];

console.log(myArray.splice(0,2)); //returns the removed items [ 1, 2 ]

console.log(myArray);
//[ 3, 4, 5, 6, 7, 8 ]


/* splice can be used to add to array
because it takes three arguments.
the first one is the index to start removing
the second is the number of items to remove
the third is the items to replace the deleted items

*/

// forexample
let numbers=[1,2,3,4,5,6,76];

numbers.splice(0,3,4,5,6);

console.log(numbers);

// this modifies the array to [ 4, 5, 6, 4, 5, 6, 76 ]

