let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  console.log(foods);

  /*
  { apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27 }
  */
  
  // Only change code below this line
  delete foods.plums;
  delete foods.oranges;
  delete foods.strawberries;
  
  // Only change code above this line
  
console.log(foods);
/*
{ apples: 25, bananas: 13, grapes: 35 }
*/
