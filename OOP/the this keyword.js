//there is a safer way of accessing objects using the 'this' keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
 console.log( dog.sayLegs());
//  This dog has 4 legs.