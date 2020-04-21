// the constructor property is one every object has 

/*
it is a way in which we can check if an object 
is generated from a constructor
*/

function Dog(name,legs){
    this.name=name;
    this.legs=legs;
}

let zoey=new Dog("zoey",2);

console.log(zoey.constructor === Dog); //true meaning that the object belongs to the Dog constructor

//example
function Dog(name) {
    this.name = name;
  }
  
// Only change code below this line
  function joinDogFraternity(candidate) {
     if(candidate.constructor ===Dog){
       return true;
     }
     else{
       return false;
     }
  }
