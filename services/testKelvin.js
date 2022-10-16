const imports = require('./index.js');

const {getAllPrices, splitEvenly} = imports.index;
// const getAllPrices = imports.index.getAllPrices;
// const splitEvenly = imports.index.splitEvenly;

const listOfItems = [
    {
        item: "banana", 
        price: 3
    },
    {
        item: "banana", 
        price: 4
    },
    {
        item: "banana", 
        price: 7
    },
    {
        item: "banana", 
        price: 8
    },
]

const numberOfPeopleParam = 5;

// function getAllPricesChecker(listOfItemsParam){
//     const pricesArray = getAllPrices(listOfItemsParam);
//     for (let i=0; i<pricesArray.length; i++){
//         if(pricesArray[i] != listOfItemsParam[i].price)
//             return false;
//         return true;
//     }
// }

function splitEvenlyChecker(listOfItemsParam, numberOfPeopleParam){
    let sum=0;
    for(let i=0; i<listOfItems.length; i++){
        sum += listOfItems[i].price;
    }
    const result = sum/numberOfPeopleParam;
    if (result === splitEvenly(listOfItems, numberofPeopleParam))
        return true;
    else    
        return false;

}


