//if we create many objects, then their properties are refered to as own properties


function Bird(name) {
    this.name = name;
    this.numLegs = 2; //own properties are defined inside a constructor
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in canary){
      if(canary.hasOwnProperty(property)){
          ownProps.push(property);
          console.log(ownProps);
          
      }
  }

//[ 'name', 'numLegs' ] //it returns an array of properties