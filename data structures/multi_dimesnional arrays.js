let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], //first level
    ['loop', 'shift', 6, 7, 1000, 'method'],//second level
    ['concat', false, true, 'spread', 'array'],//third level
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];
  
  myNestedArray[2][4]="deep";
  myNestedArray[2][5]="deepest";

  console.log(myNestedArray);

  