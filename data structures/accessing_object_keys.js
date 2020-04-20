//we can acess object keys using 

//Object.keys(object)

// forexample
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

function findKeys(obj){
    return Object.keys(obj);
}

console.log(users);

/*
{ Jona: { online: true },
  Joel: { online: true },
  Jason: { online: true },
  Jotham: { online: true } }
*/
