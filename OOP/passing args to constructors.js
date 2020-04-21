//This helps in case we wanna create objects that have different value for all instances

function Dog(name,legs){
    this.name=name;
    this.legs=legs;

}

zoey=new Dog("Zoey",2);

console.log(zoey);

//this outputs a dog object
// Dog { name: 'Zoey', legs: 2 } 