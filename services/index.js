const listOfItems = [
    {
    item: "banana", 
    price: 3
    }
]

const prices = [];
function getAllPrices(itemsList){
    for (let i=0; i<itemsList.length; i++){
        prices.push(itemsList[i].price);
    }
    console.log(prices);
}

getAllPrices(listOfItems);

function splitEvenly(priceList, numberOfPeople){
    let sum = 0;
    let i = 0;
    while (i<priceList.length){
        sum+= priceList[i];
        i++;
    }
    console.log(sum/numberOfPeople);
}

splitEvenly(prices, 3);
