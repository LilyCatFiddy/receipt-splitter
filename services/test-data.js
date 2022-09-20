const listOfReceiptItems = [
  {
    item: "STRAINER",
    price: 4.99
  },
  {
    item: "RIBEYE",
    price: 23.44
  },
  {
    item: "FINE PEPPER POWDER",
    price: 4.99
  },
  {
    item: "RED PEPPER PASTE",
    price: 5.99
  },
  {
    item: "TOFU",
    price: 1.29
  },
  {
    item: "BONITO",
    price: 9.99
  },
  {
    item: "YELLOW DRAGON FRUIT",
    price: 4.07
  },
  {
    item: "GREEN ONION",
    price: 0.33
  },
  {
    item: "GROCERY",
    price: 13.99
  },
  {
    item: "ENOKI MUSHROOM",
    price: 5.98
  },
  {
    item: "KELP",
    price: 3.99
  },
  {
    item: "THAI TEA MIX",
    price: 6.49
  },
  {
    item: "SOY MILK",
    price: 4.99
  },
  {
    item: "BAG",
    price: 0.25
  }

]

//Function that extracts all prices to an array
const prices = [];
function subtotal(receiptList) {
  for (let i = 0; i < listOfReceiptItems.length; i++) {
    prices.push(listOfReceiptItems[i].price);
  };
  console.log(prices);
  const subtotal = prices.reduce((prev, next) => prev + next, 0); /* need help reformatting output to price,
  it currently outputs as a recurring decimal. Let's ROUNDUP the output as well. */
  console.log('Subtotal: ', subtotal);
}
subtotal(listOfReceiptItems);
//TAX is $0.43, and TOTAL is 491.21


//Function that extracts all items to an array
const items = [];
function subItems(receiptList) {
  for (let i = 0; i < listOfReceiptItems.length; i++) {
    items.push(listOfReceiptItems[i].item);
  };
  console.log(items);
}
subItems(listOfReceiptItems);
