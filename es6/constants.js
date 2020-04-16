//we use the const keyword to declare constants

//this creates a read only reference to a value.

const PI=3.142;

// constants are always declared in Uppercase

// a const can also create a block scoped variable which cannot be reassigned

//using const with objects

// when const is used with objects, we can be able to change the properties of the object

// forexample

const person ={
    name:"Jonathan",
    age:23,
    gender:"Male"
}

// we can say ,

person.name="Jonah";
console.log(person);
// { name: 'Jonah', age: 23, gender: 'Male' }