
let testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

let sum = 0;

for (let arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {

  sum += testArray[arrayPosition];

}

console.log("The sum of" + testArray + "is:" + sum);
