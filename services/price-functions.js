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
  const people = {};
  const splitPennies = Math.floor(price / numberOfPeople * 100);
  let remainingPennies = price * 100 % splitPennies;
  for (let i = 0; i < numberOfPeople; i++) {
    people[`person${i + 1}`] = splitPennies / 100;
  }

  const potentialRemainderRecepients = Object.keys(people);
  while (remainingPennies) {
      const luckyIndex = Math.floor(Math.random() * potentialRemainderRecepients.length);
      const [winnerName] = potentialRemainderRecepients.splice(luckyIndex, 1);
      people[winnerName] += 0.01;
      remainingPennies--;
  }
    
  return people;
}
// people = { person1: 3.66, person2: 3.66, person3: 3.66 }
// potentialRemainderRecepients = [person2, person3];
// luckyIndex = 0;
// potentialRemainderRecepients.splice(luckyIndex, 1) = ['person1'];
// const winnerName = 'person1';
// people['person1'] += 0.01
// console.log(splitter(11, 3));
