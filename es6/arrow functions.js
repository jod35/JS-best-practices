//in es5
// a function is written like this

function add(x,y){
    console.log(x+y);
}

console.log(add(3,4)); //7

//using an arrow function

const addnums =(a,b)=>{
    console.log(a+b);
}

addnums(3,5); //8

console.log(typeof add); //function

//arrow functions with many parameters

/*if an arrow function has more than two params, we can use the syntax
   (p1,p2,p3....pn)
*/


//to sort an array of numbers in ascending order

let numbers=[43,22,45,56];
numbers.sort((a,b)=>{
  return a-b;
});

console.log(numbers); //[ 22, 43, 45, 56 ]


//using arrow functions
numbers.sort((a,b)=>b-a);
//descending order
console.log(numbers);
// [ 56, 45, 43, 22 ]

