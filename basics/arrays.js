//arrays are boxes that store multiple values

// var name="Jonathan"; //variable that stores on value

var names =["Joan","Jonaathan","Philip"];

//they can also store data of different data types

// console.log(names);

/* arrays are stored in positions
0- first
1-second up to the nth*/

// console.log("The first element is " + names[0]); 
//we use bracket notation to access elements in an array 
//Joan

//finding the length of an array
//.legth is used 

// console.log(names.length);
//3

// using a for loop to loop in an array

for(n of names){
    console.log(n);
    /*Joan
    Jonaathan
    Philip */
        
}


//we can also use the foreach function

names.forEach((n,index)=>{
    console.log(index + "-"+ n); //retirns the indices

    /*0-Joan
    1-Jonaathan
    2-Philip */

});






