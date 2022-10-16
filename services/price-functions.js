function getSubtotal(receipt) {
  const prices = [];
  for (let i = 0; i < receipt.length; i++) {
    if (receipt[i].price === undefined) {
      continue;
    }
    prices.push(receipt[i].price);
  };
  const subtotal = prices.reduce((prev, next) => prev + next*100, 0)/100; 
  return "$" + subtotal;
}


function listItems(receipt) {
  const items = [];
  for (let i = 0; i < receipt.length; i++) {
    if (receipt[i].item === undefined) {
      continue;
    }
    items.push(receipt[i].item);
  };
  return items;
}

function splitEvenly(price, numberOfPeople){
  // incomplete function, need to deal with edge case of a running number, such as a dollar split between 3 people. 
  // output: A owes '$ X.XX', B owes 'X.XX', C owes 'X.XX'
  return price/numberOfPeople;
}
