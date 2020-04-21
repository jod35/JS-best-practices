// a property of an object that is a function is called a method

let myDog={
    name:"Zoey",
    age:4,
    sayname:function(){
        return `My name is ${this.name}`
    }
}

console.log(myDog.sayname());
//My name is Zoey