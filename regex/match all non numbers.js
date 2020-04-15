//we use /D which is the exact opposite of /d

const myStr="2000 is the year my sister was born";
const myRegex=/\D/g;

console.log(myStr.match(myRegex));

/*
[ ' ',
  'i',
  's',
  ' ',
  't',
  'h',
  'e',
  ' ',
  'y',
  'e',
  'a',
  'r',
  ' ',
  'm',
  'y',
  ' ',
  's',
  'i',
  's',
  't',
  'e',
  'r',
  ' ',
  'w',
  'a',
  's',
  ' ',
  'b',
  'o',
  'r',
  'n' ]
  */