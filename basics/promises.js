//promises

const makeServerRequest=new Promise((resolve,reject)=>{

}); // new Promise

//a promise

const makeServerRequest=new Promise((resolve,reject)=>{
    let serverResponse=false;

    if (serverResponse){
        resolve("Server response has been got");
    }
    else{
        reject("No data found");
    }
});


//using a promise

makeServerRequest.then(result=>{
console.log(result);

});