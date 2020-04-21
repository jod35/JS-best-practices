//if we have many instances of a constructor,there are chances that we can be able to duplicated 
// an already set property

/*
setting prototype properties saves us from this duplication
*/

function Dog(name,legs){
    this.name=name;
    
}

Dog.prototype.legs=2; //prototype properties are defined outside constructors on prototypes

let zoey= new Dog("zoey");
let edge= new Dog("edge");

console.log(zoey.legs); //2

