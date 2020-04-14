function getKey(k){
   return `a key named ${k}`;
}

//bad
const obj={
   id:5,
   name:'Migade'
};

obj[getKey('enabled')] =true;

//good
const obj={
	id:5,
	name:'Migade'
	[getKey('enabled')]:true,
};


//using object method shorthand
//bad
const atom={
   value:1,
   addValue:function(value){return value +=1};
}

//good way
const atom={
   value:5,
   addValue(value){
	   return atom.value +value;
   },
}

//using object property shorthand

const age=12;
//bad
const person={
age:23
}

//good
const person={
	age,
}


//grouping object properties at the beggining of a project
//
const age=23;
const gender='male';

//bad 
const person={
grade:'p3',
age,
location:'Kira',
gender}

//how to generate an object from another using the rest operator

const original={a:1,b:2};
const copy={...original,c:3} //{a:1,b:2,c:3}


