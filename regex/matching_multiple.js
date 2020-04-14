/*
matching multiple patterns with a string is done using
the or operator
*/ 
myString="Ssali jonathan Kiggundu";
myRegex=/Ssali|jonathan|Kiggundu/;

console.log(myRegex.test(myString));

//returns true