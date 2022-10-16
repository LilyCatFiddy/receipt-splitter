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

function splitter(price, numberOfPeople) {
  if (numberOfPeople <= 1) {
    return price;
  }
  const res = {};
  const split = Math.floor(price / numberOfPeople * 100);
  let remainder = price * 100 % split;
  for (let i = 0; i < numberOfPeople; i++) {
    res[`person${i + 1}`] = (split + remainder) / 100;
    if (remainder) remainder = 0;
  }
  return res;
}