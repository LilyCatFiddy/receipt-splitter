console.log('---------------------------------------------step 1');
// Step 1. Add names to group
const members = [];
members.push('Kathy');
members.push('Cody');
members.push('Kelvin');
console.log(members);

console.log('---------------------------------------------step 2');

// Step 2. SessionInfo generates an ID number associated with each group member. Undefined balance is also associateed and will be updated 
function sessionInfoSignUp(members) {
  let sessionInfo = {};
  let idNumber = 1;
  for (let i = 0; i < members.length; i++) {
    sessionInfo[idNumber.toString().padStart(3, '0')] = { name: members[i], balance: 0 };
    idNumber++;
  }
  return sessionInfo;
}

let sessionResult = sessionInfoSignUp(members);
console.log(sessionResult);
console.log('---------------------------------------------step 3 & 4');

// Step 3. Upload receipt. 
//  Choose calculation option: 1) total to be split evenly, 2) items to be split by ownership


// Step 4.1a Automatic balance to be split evenly, receives total price and outputs balance back into sessionInfo
function splitter(price, sessionInfo) {
  //need list of MemberId and associate the lucky index with memberID
  let remainingMembers = Object.keys(sessionInfo);

  const splitPennies = Math.floor(price / remainingMembers.length * 100);
  let remainingPennies = price * 100 % splitPennies;

  while (remainingPennies) {
    const luckyIndex = Math.floor(Math.random() * remainingMembers.length);
    sessionInfo[remainingMembers.splice(luckyIndex, 1)[0]].balance = 1;
    remainingPennies--;
  }

  for (let id in sessionInfo) {
    sessionInfo[id].balance += splitPennies;
    sessionInfo[id].balance /= 100;
  }

  return sessionInfo;
}
// console.log(splitter(421.79, sessionResult));
// console.log(splitter(1000, sessionResult));


// next steps, use Receipt function to input price into Splitter Function
// next next steps, write a function that can find price based on Ownership