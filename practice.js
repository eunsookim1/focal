/*
function sumArray(array) {
  const ourArray = [1, 4, 0, 9, -3];
  let sum = 0;

  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  
  return sum;
}

console.log(sumArray([1, 4, 0, 9, -3]));



let args = process.argv;

function sumArray(array) {
  let args = process.argv;
  args = args.slice(2,4);
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += Number(args[i]);
  }
  
  return sum;
}

console.log(sumArray(args));
*/

let printFarmInventory = function(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = 0 + cowString;
  }

  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
};
printFarmInventory(7, 11);