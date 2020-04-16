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

//using a single param

let square=x=>x*x;

console.log(square(2)); //4


//arrow functions with objects

let addColor=function(color){
    return {value:color}
}

console.log(addColor("Blue"));

//returns { value: 'Blue' }

let backgroundColor=addColor("Chocolate");
console.log(backgroundColor.value);

//returns 'Chocolate'


// this can be rewritten using arrow functions

let setColor=color=>{value:color};

console.log(setColor("Yellow"));//undefined

//solve this by using parens

let SetColor=color=>({value:color});

console.log(SetColor("Yellow")); //{ value: 'Yellow' }


