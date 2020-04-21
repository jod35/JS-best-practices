function copyMachine(arr,num){
    let newArr=[];
    while (num>=0){
        newArr.push([...arr]);
    }
    num --;
}

console.log(copyMachine([1,2],3));
