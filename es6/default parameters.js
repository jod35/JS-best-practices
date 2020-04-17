let hi=function (message="Helo there"){
    console.log(message);
    
}

//such a function has a param 'message' with a default of "Helo there"
hi();//Helo there
hi("hey"); //hey


// function args vs params

function add(a,b){ //a,b are params
    return a+b;
}

add(2,3); //2 and 3 are args


//evaluating default params
function addToy(toy,toybox=[]){
    toybox.push(toy);

    console.log(toybox);
}

addToy("Car"); //[ 'Car' ]


//a function can also take a default value which can be a result of a function call
function date(d=today()){
    console.log(d);
}

function today(){
    return (new Date()).toDateString("en-US");
}

date(); //Fri Apr 17 2020

//we can also make args mandatory
function argRequired(){
    throw new Error("The arguement is required");
}

function add(x=argRequired(),y=argRequired()){
    console.log(x+y);
}

add(10,34); //44
add(23); //throws error

// using other params in default values
function add(x=1,y=x,z=x+y){
    return x+y+z;
}
console.log(add(1,2,3)); //6

