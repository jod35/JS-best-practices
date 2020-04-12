//Functions are statements that perform something. 
//They help us to reuse code


// function addition(){
//     return 1+2;
// }


// console.log(addition()); //returns 3

//functions with arguements

//same function

function addition(a,b){
    return a+b;
}

console.log(addition(100,100)); //200

// some sample functions

console.log(Object.keys(  // the keys atribute returns an array of properties that an object has
    {
        "name":"Jonathan", //[ 'name', 'age', 'gender', 'country' ]
        "age":21,
        "gender":"Male",
        "country":"Uganda"
    }
));


console.log(Object.values( {
    "name":"Jonathan", //returns [ 'Jonathan', 21, 'Male', 'Uganda' ] values
    "age":21,
    "gender":"Male",
    "country":"Uganda"
}));



//some inbuilt functions

var myName="Jonathan";

console.log(myName.toLowerCase()); //jonathan

console.log(myName.toUpperCase());  //JONATHAN

console.log(myName.startsWith("Jon")); //returns true if word contains "Jon"




