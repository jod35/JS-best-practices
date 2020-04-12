//for loops help to iterate over a finite no of times

// for(var i=0 ; i<=10; i++){
//     //the logic
//     console.log(i);
    
// }


//looping over an array

var persons=[
    {
        "name":"Jonathan",
        "age":22,
    },
    {
        "name":"Nelson",
        "age":30,
    }
]

for(var i=0;i<=persons.length;i++){
    console.log(persons[i].name);
    console.log(persons[i].age);
        
}


