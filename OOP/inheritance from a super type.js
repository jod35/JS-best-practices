function Animal(){};
Animal.prototype={
    constructor:Animal,
    eat:function(){
        console.log("nom nom nom");
        
    }
}

function Bird(name){
    this.name=name;
    this.sayName=function(){
        console.log(`my name is ${this.name}`);
        
    };
}

Bird.prototype=Object.create(Animal.prototype);

let hen = new Bird("Hen");

console.log(hen.sayName()); //My name is Hen


console.log(hen.eat()); //nom nom nom


