let testArray = [0, 1, 1, "1", 3, "311"];

for (let arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPosition++) {

  let currentElement = testArray[arrayPosition];
  let nextElement = testArray[arrayPosition + 1];

  console.log("testing" + currentElement + "and" + nextElement + "(greater than):" + (currentElement));

  console.log("testing" + currentElement + "and" + nextElement + "(less than or equal to):" + (currentElement <= nextElement));

  if (currentElement == nextElement) {

    console.log("testing" + currentElement + "and" + nextElement + "(strictly equal to):" + (currentElement === nextElement));

  if (currentElement !== nextElement) {

    console.log(currentElement + "is" + typeof(currentElement));

    console.log(nextElement + "is" + typeof(nextElement));
  }
} else
  {
    console.log("testing" + currentElement + "and" + nextElement + "(equal to): false");
  }
}
