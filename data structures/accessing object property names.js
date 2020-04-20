var foods={
    apples:25,
    mangoes:34,
    grapes:23,
}

function checkInventory(scannedItem){
    return foods[scannedItem];
}

console.log(checkInventory["apples"]);
