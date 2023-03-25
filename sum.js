let args = process.argv;

let sumArray = function() {
  args = args.slice(2,4);
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += Number(args[i]);
  }
  
  return sum;
};

console.log(sumArray(args));