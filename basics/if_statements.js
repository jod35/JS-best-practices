//if is used for setting conditions

var bool= false;

if (bool){
    console.log("Bool variable was true");     
    //works only if bool is true
}

else{
    console.log("Bool variable is false"); //when we have other conditions
    
}

//checking if a person is an adult

function checkAdult(name,age){
    if (age <18){
        console.log(name + " is a child");
        
    }
    else{
        console.log(name +" is an adult");
    }
    
}

// checkAdult("Jonathan",21);
// checkAdult("Jeremiah",3);


// cases in which we have many conditions

//else if 

