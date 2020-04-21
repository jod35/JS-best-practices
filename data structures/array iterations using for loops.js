//we use for loops to iterate through arrays

function checkFor(arr,item){
    let i;

    for(i=0;i<arr.length;i++){
        if(arr.indexOf(item)>=0){
            console.log("True");
        }
    }
}

checkFor([11,2,3,4,4],3)

/*
True
True
True
True
True
*/