//closures help us to prevent some properties of a constructor from being changed

// for example

function Bird(){
    let numLegs=4;
    this.getNumberOfLegs=function(){
        return numLegs;
    }
}

let duck= new Bird();
duck.numLegs=43;
console.log(duck.getNumberOfLegs()); //4

//this means that the numLegs cannot be changed
