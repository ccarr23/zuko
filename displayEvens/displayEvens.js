console.log("starting code...");

function returnEvens() {
  console.log("inside function");

  let startingNumber = document.forms["displayEvens"]["startingNumber"].value;
  let endingNumber =   document.forms["displayEvens"]["endingNumber"].value;
  let stepValue =      document.forms["displayEvens"]["stepValue"].value;

console.log(startingNumber, endingNumber, stepValue);

// before we run this loop, we need to cast (or convert) stepValue into
// a number. currently it is being treated as a sting
   startingNumber = Number(startingNumber);
   endingNumber = Number(endingNumber);
   stepValue = Number(stepValue);

   for (let i = startingNumber; i <= endingNumber; i += stepValue ) {
   if (i%2 == 0) {
      document.getElementById("result").innerText += i + ",";

   console.log(i);
       // alert("Must enter a number.");
       // document.forms["displayEvens"]["startingNumber"].parentElement.class = "form-group has-error";
       // document.forms["displayEvens"]["endingNumber"].parentElement.class = "form-group has-error";
       // document.forms["displayEvens"]["stepValue"].parentElement.class = "form-group has-error";
  //   console.log(i);
     }

   }

  console.log("end of function");
  return false;
}

console.log("ending code...");
