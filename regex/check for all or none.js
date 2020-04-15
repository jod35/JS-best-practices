//here we use the ? to such for all or none ocurrences of a pattern in a string
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american));
; // Returns true
console.log(rainbowRegex.test(british));
//returns true
