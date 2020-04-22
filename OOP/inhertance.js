//constructors can own properties and methods from other constructors
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
   
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  
  };

  //for example the car and bear constructors all have the eat() method from the super Animal
  