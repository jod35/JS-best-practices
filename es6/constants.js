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

// in order for us to make an object immutable

var man=Object.freeze({name:"JOnathan",age:21});

man.name="Jona";
console.log(man);

// { name: 'JOnathan', age: 21 } meaning that it has not changed


/* the Object.freeze method is shallow which means it can make an object immutable but cannot 
change the object properties of an object*/

//forexample

const pupil=Object.freeze({
    name:"Jonathan",
    age:21,
    location:{
        country:"Uganda",
        city:"Kampala",
        street:"Lumumba Street"
    }
});

console.log(pupil);

/*
{ name: 'Jonathan',
  age: 21,
  location:
   { country: 'Uganda', city: 'Kampala', street: 'Lumumba Street' } }*/

// changing the properties
pupil.location.city="Mombasa";

console.log(pupil);

/*
{ name: 'Jonathan',
  age: 21,
  location:
   { country: 'Uganda', city: 'Mombasa', street: 'Lumumba Street' } }

*/

//const with arrays

const colors=[];
colors.push('green');

console.log(colors);
//returns [ 'green' ]

colors.pop()
// returns []



