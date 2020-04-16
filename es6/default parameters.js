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