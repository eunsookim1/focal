// takes a single parameter from the command line,
// a number, and number and rolls that many six-sided dice.

// Use Math.random method



const dice = function (max) {
  let numArray = [];
  
  for (let i = 0; i < max; i++) {
    let rolledNumber = Math.floor(Math.random() * 6) + 1;
    numArray.push(rolledNumber);
  }
  return numArray.join(", ");
};

// Expected output:
// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

console.log(dice(process.argv[2]));


// do I need to use process.argv?

