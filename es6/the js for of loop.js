let array=[1,2,3,4,5];

for(let i of array){
    console.log(i+1);
    
}
/*
1
2
3
4
5 */

// if we dont want the values of the items to change

for(const i of array){
    console.log(i);
    
}
/*
1
2
3
4
5*/

//iterate over a string
let myName="Ssali Jonathan Kiggundu";
for(const i of myName){
    console.log(i);
    
}

/*
5
S
s
a
l
i
 
J
o
n
a
t
h
a
n
 
K
i
g
g
u
n
d
u*/

// iterating over a map
let colors= new Map();
colors.set('red','#ff0000')
colors.set('green','#00ff00')
colors.set('blue','#0000ff')

for(const i of colors){
    console.log(i);
}
/*
[ 'red', '#ff0000' ]
[ 'green', '#00ff00' ]
[ 'blue', '#0000ff' ]
*/

