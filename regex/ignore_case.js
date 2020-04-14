/*sometimes we just wanna 
  ignore 
  case

  this is done using the flag 'i'
*/ 
const myName="Ssali Jonathan Kiggundu";
const myRegex=/ssali/i;

console.log(myRegex.test(myName));
