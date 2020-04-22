//prototyoe prototypes can be turned into objects
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
      eat(){
        console.log("nom nome");
      },
      describe(){
        console.log("This dog is " + this.name);
      }
  };