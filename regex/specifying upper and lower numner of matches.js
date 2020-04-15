// this is done using the {} (quantity specifiers)
//these help to specify the upper and lower numbers of patterns 
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
; // Returns true
console.log(multipleA.test(A2));
; // Returns false
