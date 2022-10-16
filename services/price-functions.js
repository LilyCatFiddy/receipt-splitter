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