//in ES6 , an object literal refers to collection of name and value pairs

//forexample

function createMachine(name,status){
    return {
        name:name,
        status:status
    }
}
console.log(createMachine("Jonathan","done"));

//creates 
// { name: 'Jonathan', status: 'done' }

// /to eliminate the redundancy of name and value having to exist twice

// in es6,

function makeMachine(name,status){
    return {
        name,status
    };
}
console.log(makeMachine("Jonathan","Married"));

//{ name: 'Jonathan', status: 'Married' }


//similarly, we can construct object literals like this
let name="jonathan";
let age=21;

let machine={name,age};
console.log(machine);

// { name: 'jonathan', age: 21 }

//enabling computed property names 

//here we use []

// forexample

let machine_name='machine name';

let mymachine={
    [machine_name]:"Jonathan",
    age:21
};

console.log(mymachine);
// { 'machine name': 'Jonathan', age: 21 }


