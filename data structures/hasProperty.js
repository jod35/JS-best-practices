//sometimes we wanna check if an object has a property
var users={
    Jona:{
        online:true
    },
    Joel:{
        online:true
    }, 
    Jason:{
        online:true
    }, 
    Jotham:{
        online:true
    }
}

//we can use hasOwnProperty(property) to check if an object has a property
// for example,

console.log(users.hasOwnProperty('Jonathan')); //false
console.log(users.hasOwnProperty('Jotham')); //true

