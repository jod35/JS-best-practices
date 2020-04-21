function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
//   Dog.prototype = {
  
//     numLegs: 4,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };

// let dog =new Dog("jerry");

// console.log(dog.constructor ===Dog); 
//false because the object prototype property has overwritten
//the constructor property


//when we set the constructor property,
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor:Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

let george = new Dog("George");

console.log(george.constructor===Dog); //this time returns true
