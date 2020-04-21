//each time we create an object, it is an instance of that constructor

function Dog(name,color){
    this.color=color;
    this.name=name;
}

let zoey= new Dog("zoey","brown");

// to check if zoey is an instance of the constructor,
//we use the instanceof operator

console.log(zoey instanceof Dog);
//true meaning that zoey is an instance of Dog