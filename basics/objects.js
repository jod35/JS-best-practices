//objects are collections of grouped info

// var myname="Jonathan"; //string
// var age=21.5; //number                     info about a person
// var has_driver_license=true;
// var empty =undefined;


//we can create an object

var person={
    name:"Jonathan",
    age:21,
    has_driver_license:true,
    dateOfBirth:"01 Dec 2020",
    dress:{
        firstline:123,
        postCode:122,
        country:"Uganda"
    }
}

// console.log(JSON.stringify(person)); 
//returns a string representation of an object


//accesing the object's attributes
console.log(person.name);
console.log(person.age);
console.log(person.has_driver_license);

//accessing an object's values

console.log(Object.values(person)); //returns an array containing the values

JSON.stringify(person);

