const myStr="These are the days we will we never forget";
const myRegex=/\s/g;
console.log(
    myStr.match(myRegex));

//This returns a [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]
//list of whitespaces in array