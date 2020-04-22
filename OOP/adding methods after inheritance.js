//constructors created can also have their own methods besides those that they inherited

function Animal(){}

Animal.prototype.eat=function(){
    console.log("nom nom nom ");
}

function Bird(){}

Bird.prototype=Object.create(Animal.prototype); //inheriting the Animal constructor
Bird.prototype.constructor=Bird; // setting the constructor to Bird


Bird.prototype.fly=function(){
    console.log("I am flying");
}

let new_bird= new Bird();

console.log(new_bird.fly()); //I am flying
console.log(new_bird.eat()); //nom nom nom 

// this shows that the Bird instance can have both eat and now methods.


