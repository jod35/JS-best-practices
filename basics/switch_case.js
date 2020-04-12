//for many nested if statements
// var val=100;
// switch(val){
//     case 1:
//         console.log("Low");
//         break;
//     case 2:
//         console.log("HIgh");
//         break;
//     case 3:
//         console.log("Very High");
//         break;
//     default:
//         console.log("Not in range");
        
// }

var person={
    "name":"Johnson",
    "age":18
}

switch(person.age){
    case 10:
        console.log("Very young");
        break;
    case 12:
        console.log("Growing");
        break;
    case 18:
        console.log("Adult");
        break;
    case 19:
        console.log("Old");
        break;
    default:
        console.log("Out of range");
        break;
}
        

switch(new Date().getDay()){
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("I dont know!");       
}