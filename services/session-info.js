const receipt = require('../tests/receipt-test-data');

// listOfPeople
const members = [];
members.push('Kathy');
members.push('Cody');
members.push('Kelvin');
console.log(members);


function sessionInfoSignUp(members) {
  let sessionInfo = [];
  let idNumber = 1;
  for (let i = 0; i < members.length; i++) {
    sessionInfo.push(
      {
        id: idNumber.toString().padStart(3, '0'),
        name: members[i]
        // add getBalance function,
      }
    )
    idNumber++;
  }
  return sessionInfo;
}

console.log(sessionInfoSignUp(members));
  
  