/* in case we have two different objects that can have the same property,
we use mixins to give them a shared method
For example,
*/

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };

  let flyMixin=function(obj){
      obj.fly=function(){
          console.log("Flying wooosh!!!");
          
        }     
 }

 flyMixin(bird);
 flyMixin(boat);


 console.log(bird.fly()); //"Flying wooosh!!!"
 console.log(boat.fly()); //"Flying wooosh!!!"

 
 
 


