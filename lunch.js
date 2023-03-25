//  output: "I'm hungry/not hungry and I have 00minutes for lunch"
//          "what to do for lunch command"

let output = '';

const whatToDoForLunch = function(hungry,availableTime) {
  if (hungry === true) {
    console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
  } else if (hungry === false) {
    console.log("I'm not hungry and I have " + availableTime + " minutes for lunch.");
  }
  
  if (hungry === false) {
    output = 'Wait until you\'re hungry.';
  } else if (hungry === true) {
    if (availableTime < 20) {
      output = "Pick up a snack or grab sometihng you have ready at home.";
    } else if (availableTime >= 20 && availableTime <= 30) {
      output = "You deserve a break and should take time to cook a tasty meal.";
    } else if (availableTime > 30) {
      output = "This is an intense program after all and you should probably reconsider.";
    }
    return output;
  }
};


whatToDoForLunch(true, 20);
console.log(output);

whatToDoForLunch(true, 50);
console.log(output);

whatToDoForLunch(false, 30);
console.log(output);

whatToDoForLunch(true, 15);
console.log(output);


