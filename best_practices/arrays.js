
//use the literal synatx to create arrays
//
const items= new Array(); //bad

//good

const items=[];

// the best way to add items to the end of an array
const someStack=[];

//bad 
someStack[someStack.length]='jonathan';


//good
someStack.push('jonathan');


//how to copy an array


const len=items.length;

const ItemsCopy=[];

let i;

for (i=0;i=len;i++){
   ItemsCopy[i]=items[i];
}

//good
 const ItemsCopy=[...items];


//converting an array to an object using array spreads 

const ArrayLikeBoject={0:'foo',1:'bar',2:'baz',3:'length'};

//bad

const arr=Array.prototype.slice.call(ArrayLikeBoject);

//good
const arr=Array.from(ArrayLikeBoject);



