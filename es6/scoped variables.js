// In Javascript, a scoped variable is declared using the let keyword

let x =10;

if(x == 28){
    let x= 28;
    console.log(x);
    //logs x as 28
    
}

console.log(x); //logs x as 10
