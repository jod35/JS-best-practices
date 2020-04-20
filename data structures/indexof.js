//checking for the presence of an item using the indexOf() function
/*
  indexOf(array , element)
*/
function checkFor(arr,element){
    return arr.indexOf(element);
}

console.log(checkFor([,1,2,3,4,5,6,56],56)); //7
console.log( checkFor(["Pen","Chalk","Pencil"],"Pencil")); //2

